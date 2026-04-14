/* NCI Site Scripts */
(function () {
  'use strict';

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* ---- Brief filter buttons ---- */
  var filterGroup = document.querySelector('[data-filter-group]');
  var filterContainer = document.querySelector('[data-filter-container]');
  if (filterGroup && filterContainer) {
    var buttons = filterGroup.querySelectorAll('[data-filter]');
    var cards = filterContainer.querySelectorAll('[data-tags]');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        var tag = btn.getAttribute('data-filter');
        cards.forEach(function (card) {
          if (tag === 'all' || card.getAttribute('data-tags').indexOf(tag) !== -1) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ---- Contact mailto form with validation and honeypot ---- */
  var form = document.getElementById('mailto-form');
  if (form) {
    var honeypot = form.querySelector('[name="website"]');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Honeypot: if filled by a bot, silently reject
      if (honeypot && honeypot.value) return;

      var name = form.querySelector('[name="name"]');
      var email = form.querySelector('[name="email"]');
      var message = form.querySelector('[name="message"]');
      var org = form.querySelector('[name="organization"]');
      var type = form.querySelector('[name="type"]');

      // Clear previous errors
      form.querySelectorAll('.form-error').forEach(function (el) { el.remove(); });
      form.querySelectorAll('.has-error').forEach(function (el) { el.classList.remove('has-error'); });

      var errors = [];
      if (!name.value.trim()) errors.push({ field: name, msg: 'Name is required.' });
      if (!email.value.trim()) {
        errors.push({ field: email, msg: 'Email is required.' });
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        errors.push({ field: email, msg: 'Please enter a valid email address.' });
      }
      if (!message.value.trim()) errors.push({ field: message, msg: 'Message is required.' });

      if (errors.length > 0) {
        errors.forEach(function (err) {
          err.field.classList.add('has-error');
          var msg = document.createElement('span');
          msg.className = 'form-error';
          msg.textContent = err.msg;
          msg.setAttribute('role', 'alert');
          err.field.parentNode.appendChild(msg);
        });
        errors[0].field.focus();
        return;
      }

      var subject = encodeURIComponent('NCI Inquiry: ' + type.value);
      var body = encodeURIComponent(
        'Name: ' + name.value.trim() + '\n' +
        'Organization: ' + (org.value.trim() || 'N/A') + '\n' +
        'Email: ' + email.value.trim() + '\n' +
        'Type: ' + type.value + '\n\n' +
        message.value.trim()
      );
      window.location.href = 'mailto:Donavan@nciresearch.org?subject=' + subject + '&body=' + body;
    });
  }
})();
