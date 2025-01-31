/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Source: https://getbootstrap.com/docs/5.3/customize/color-modes/#javascript
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * Modified by 同志社高校地学部
 */

(() => {
  'use strict';

  const applyPreferredTheme = () => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    document.documentElement.setAttribute(
      'data-bs-theme',
      prefersDarkMode ? 'dark' : 'light'
    );
  };

  applyPreferredTheme();

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', applyPreferredTheme);
})();
