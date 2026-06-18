// ==UserScript==
// @name         FF selection fix
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  parse and highlight English on web pages.
// @author       jw0785
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const selection_style = `
    :root {
      --color-accent-primary-selected: var(--color-accent-attention) !important;
    }
    @media (prefers-color-scheme: light) {
      :root {
        --color-accent-primary: #2656c9 !important;
        --color-accent-attention: #4766cb !important;
        --text-color-accent-primary-selected: #ffffff  !important;
      }
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --color-accent-primary: #aec6f6 !important;
        --color-accent-attention: #17379d !important;
        --text-color-accent-primary-selected: #ffffff !important;
      }
    }
    ::selection {
      background: var(--color-accent-primary-selected) !important;
      background-color: var(--color-accent-primary-selected) !important;
      color: var(--text-color-accent-primary-selected) !important;
    }
    `;
    const style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = selection_style;
    document.head.appendChild(style);
})();