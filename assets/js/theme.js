(function () {
  var STORAGE_KEY = 'theme';
  var root = document.documentElement;
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function getStored() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function currentTheme() {
    var stored = getStored();
    if (stored === 'light' || stored === 'dark') return stored;
    return media.matches ? 'dark' : 'light';
  }

  function syncButtons(theme) {
    var buttons = document.querySelectorAll('.theme-toggle');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('fa-moon', 'fa-sun');
      buttons[i].classList.add(theme === 'dark' ? 'fa-sun' : 'fa-moon');
      buttons[i].setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    }
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    syncButtons(theme);
  }

  // Applied immediately (script is loaded synchronously in <head>, before first paint)
  // so the correct theme is set before the page renders — avoids a flash of the wrong
  // theme. Buttons don't exist in the DOM yet at this point, so only the attribute is
  // set here; icon sync happens separately once the DOM is ready.
  root.setAttribute('data-theme', currentTheme());

  // Follow system preference changes only while the user hasn't made an explicit choice.
  media.addEventListener('change', function () {
    if (!getStored()) apply(currentTheme());
  });

  document.addEventListener('DOMContentLoaded', function () {
    syncButtons(root.getAttribute('data-theme'));

    var buttons = document.querySelectorAll('.theme-toggle');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        try {
          localStorage.setItem(STORAGE_KEY, next);
        } catch (e) {}
        apply(next);
      });
    }
  });
})();
