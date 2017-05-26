/*
 * search-drawer.js
 * Copyright (C) 2017 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
/*global HTMLElement: true*/
(function () {
  "use strict";

  let template = document.currentScript.ownerDocument.querySelector('#search-drawer');

  class SearchDrawer extends HTMLElement {
    // static get observedAttributes() {
    //   return ['name'];
    // }

    constructor() {
      super();

      this.createShadowRoot();
    }

    connectedCallback() {
      let clone = document.importNode(template.content, true);

      this.shadowRoot.appendChild(clone);
    }

    // attributeChangedCallback(attr, oldValue, newValue) {
    //   // let clone = document.importNode(template.content, true);
    //   let str = template.innerHTML;
    //
    //   if (attr === 'name') {
    //     str = templateEngine(str, {
    //       name: newValue
    //     });
    //     // clone.querySelector('.test')
    //     // .textContent = `Hello, ${newValue}!!!`;
    //     this.root.innerHTML = str;
    //   }
    // }
  }

  window.customElements.define('search-drawer', SearchDrawer);
})();
