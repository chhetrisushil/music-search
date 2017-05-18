/*
 * search-drawer.js
 * Copyright (C) 2017 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
/*global HTMLElement, templateEngine: true*/
(function () {
  "use strict";

  let template = document.currentScript.ownerDocument.querySelector('#search-drawer');

  class SearchDrawer extends HTMLElement {
    static get observedAttributes() {
      return ['name'];
    }

    constructor() {
      super();
      if (window.isSafari) {
        this.root = this.attachShadow({
          mode: 'closed'
        });
      } else {
        this.root = this.createShadowRoot();
      }
    }

    attributeChangedCallback(attr, oldValue, newValue) {
      // let clone = document.importNode(template.content, true);
      let str = template.innerHTML;

      if (attr === 'name') {
        str = templateEngine(str, {
          name: newValue
        });
        // clone.querySelector('.test')
        // .textContent = `Hello, ${newValue}!!!`;
        this.root.innerHTML = str;
      }
    }
  }

  window.customElements.define('search-drawer', SearchDrawer);
})();
