(function () {
  var CART = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>';
  var ACTIVITY = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>';
  var BARCHART = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>';

  var LINKS = [
    { href: 'index.html',           label: "Ana's Plan",   icon: null,     title: null },
    { href: 'remi-diet.html',        label: "Remi's Plan",  icon: null,     title: null },
    { href: 'grocery.html',          label: null,           icon: CART,     title: 'Grocery List' },
    { href: 'training-schedule.html',label: null,           icon: ACTIVITY, title: 'Training' },
    { href: 'progress.html',         label: null,           icon: BARCHART, title: 'Progress' },
  ];

  var page = (window.location.pathname.split('/').pop() || 'index.html');

  var html = '<nav class="plan-nav">';
  LINKS.forEach(function (link) {
    var active = (page === link.href || (page === '' && link.href === 'index.html'));
    var cls    = active ? ' class="active"' : '';
    var attrs  = link.title ? ' title="' + link.title + '" aria-label="' + link.title + '"' : '';
    var inner  = link.icon ? link.icon : link.label;
    html += '<a href="' + link.href + '"' + cls + attrs + '>' + inner + '</a>';
  });
  html += '</nav>';

  var placeholder = document.getElementById('main-nav');
  if (placeholder) {
    placeholder.outerHTML = html;
  }
}());
