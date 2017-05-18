/*
 * search-input.js
 * Copyright (C) 2017 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
/*global HTMLElement: true*/
(function () {
  'use strict';

  let template = document.currentScript.ownerDocument.querySelector('#search-input');

  class SearchInput extends HTMLElement {
    constructor() {
      super();

      this.root = this.createShadowRoot();

      let clone = document.importNode(template.content, true);

      this.root.appendChild(clone);
    }
  }

  window.customElements.define('search-input', SearchInput);
})();
