// ==UserScript==
// @name         FF selection fix
// @namespace    http://tampermonkey.net/
// @version      1.0.1
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
    function hasSelectionRule(exclude) {
        for (const sheet of document.styleSheets) {
            if (exclude && sheet.ownerNode === exclude) continue;
            try {
                for (const rule of sheet.cssRules) {
                    if (rule.selectorText && rule.selectorText.includes('::selection')) return true;
                    if (rule.cssRules) {
                        for (const inner of rule.cssRules) {
                            if (inner.selectorText && inner.selectorText.includes('::selection')) return true;
                        }
                    }
                }
            } catch (e) {}
        }
        return false;
    }

    if (hasSelectionRule(null)) return;

    const style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = selection_style;
    document.head.appendChild(style);

    setTimeout(() => {
        if (hasSelectionRule(style)) style.remove();
    }, 5000);
})();