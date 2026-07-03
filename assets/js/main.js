/* Oportunidad País · Main JS
   - Filters (chips)
   - Forms (Recomendar, Newsletter, Sugerir empresa)
   - Mobile nav toggle
*/

(function () {
  'use strict';

  /* -------- Mobile nav -------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navMenu.classList.remove('open'));
    });
  }

  /* -------- Filters (chips) -------- */
  // Pattern: [data-filter-group] container with [data-filter-value] chips
  // and [data-filter-target] cards with [data-filter-industry] attr
  document.querySelectorAll('[data-filter-group]').forEach(group => {
    const chips = group.querySelectorAll('[data-filter-value]');
    const targetSel = group.dataset.filterTarget;
    const targets = document.querySelectorAll(targetSel);
    const empty = document.querySelector(group.dataset.filterEmpty || '');

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const value = chip.dataset.filterValue;
        let visible = 0;
        targets.forEach(t => {
          const ind = t.dataset.filterIndustry;
          const show = value === 'all' || ind === value;
          t.classList.toggle('hidden', !show);
          if (show) visible++;
        });
        if (empty) empty.classList.toggle('hidden', visible > 0);
      });
    });
  });

  /* -------- Form submissions -------- */
  // Cualquier <form data-async> se envía por fetch simulado y muestra éxito.
  document.querySelectorAll('form[data-async]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const successEl = form.parentElement.querySelector('[data-form-success]');
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
      }
      // Simulate async submit. En prod: fetch('/api/...', { method: 'POST', body: ... })
      setTimeout(() => {
        form.classList.add('hidden');
        if (successEl) successEl.classList.remove('hidden');
      }, 700);
    });
  });

  /* -------- Newsletter (CRM / agentsmind) -------- */
  const NEWSLETTER_ENDPOINT = 'https://crm.agentsmind.ai/api/form-submit/a6622847-98f1-4842-9f78-9228cf9b7783';

  function getUtmParams() {
    const out = {};
    const url = new URL(location.href);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(k => {
      const v = url.searchParams.get(k);
      if (v) out[k] = v;
    });
    return out;
  }

  function showNewsletterState(formWrap, state, payload) {
    const form = formWrap.querySelector('[data-newsletter]');
    const loading = formWrap.querySelector('[data-newsletter-loading]');
    const success = formWrap.querySelector('[data-newsletter-success]');
    const error = formWrap.querySelector('[data-newsletter-error]');
    if (form) form.classList.toggle('hidden', state !== 'idle' && state !== 'submitting');
    if (loading) loading.classList.toggle('hidden', state !== 'loading');
    if (success) success.classList.toggle('hidden', state !== 'success');
    if (error) error.classList.toggle('hidden', state !== 'error');
    if (state === 'error' && payload && payload.message) {
      const msg = error.querySelector('[data-error-msg]');
      if (msg) msg.textContent = payload.message;
    }
  }

  function submitNewsletter(form, formWrap) {
    const email = form.querySelector('input[name="email"]').value.trim();
    const name = form.querySelector('input[name="name"]').value.trim();
    if (!email) return;
    const submitBtn = form.querySelector('[data-submit]');
    const originalLabel = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = '...'; }
    showNewsletterState(formWrap, 'loading');

    const payload = {
      email: email,
      name: name || '',
      source: 'oportunidadpais.cl',
      page: location.pathname,
      referrer: document.referrer || '',
      subscribed_at: new Date().toISOString(),
      ...getUtmParams()
    };

    // Try JSON first; if it fails, fall back to form-encoded.
    fetch(NEWSLETTER_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload),
      mode: 'cors'
    })
    .then(async res => {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      // Many CRMs return plain text or empty body on success; treat 2xx as success.
      return res;
    })
    .catch(() => {
      // Fallback: form-encoded
      const formBody = new URLSearchParams(payload).toString();
      return fetch(NEWSLETTER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' },
        body: formBody,
        mode: 'cors'
      }).then(res => {
        if (!res.ok) throw new Error('HTTP ' + res.status);
      });
    })
    .then(() => {
      showNewsletterState(formWrap, 'success');
      try { localStorage.setItem('op_newsletter_subscribed', '1'); } catch (e) {}
    })
    .catch(err => {
      console.warn('Newsletter signup failed', err);
      showNewsletterState(formWrap, 'error', { message: 'Intenta de nuevo en un minuto, o escríbenos directo.' });
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalLabel; }
    });
  }

  document.querySelectorAll('[data-newsletter]').forEach(form => {
    const formWrap = form.closest('[data-newsletter-wrap]') || form.parentElement;
    form.addEventListener('submit', e => {
      e.preventDefault();
      submitNewsletter(form, formWrap);
    });
    // Retry button
    const retry = formWrap.querySelector('[data-retry]');
    if (retry) {
      retry.addEventListener('click', () => {
        showNewsletterState(formWrap, 'idle');
      });
    }
  });

  // If already subscribed, show success immediately
  try {
    if (localStorage.getItem('op_newsletter_subscribed') === '1') {
      document.querySelectorAll('[data-newsletter-wrap]').forEach(w => {
        showNewsletterState(w, 'success');
      });
    }
  } catch (e) {}

  /* -------- Active page highlight on nav -------- */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (href === path) a.classList.add('active');
    if (path === 'index.html' && href === 'index.html') a.classList.add('active');
  });

})();