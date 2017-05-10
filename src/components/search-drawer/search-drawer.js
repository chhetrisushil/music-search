/*
 * search-drawer.js
 * Copyright (C) 2017 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
/*global HTMLElement: true*/
(function () {
  "use strict";

  let template = document.currentScript.ownerDocument.querySelector('#t');

  class MyElement extends HTMLElement {
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
      let clone = document.importNode(template.content, true);
      if (attr === 'name') {
        clone.textContent = `Hello, ${newValue}!!!`;
      }

      this.root.appendChild(clone);
    }
  }

  window.customElements.define('my-element', MyElement);
})();
