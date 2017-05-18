/*
 * search-drawer.js
 * Copyright (C) 2017 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
/*global HTMLElement, templateEngine: true*/
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
    // let clone = document.importNode(template.content, true);
    let str = template.innerHTML;
      console.log(template.outerHTML);

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

window.customElements.define('my-element', MyElement);
