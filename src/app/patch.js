/*
 * patch.js
 * Copyright (C) 2017 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
/*global navigator, HTMLElement: true*/
(function () {
  "use strict";

  //patch shadowDom
  if ((window.isSafari || window.isFirefox) && !HTMLElement.prototype.createShadowRoot) {
    HTMLElement.prototype.createShadowRoot = function () {
      return this.attachShadow({
        mode: 'open'
      });
    };
  }

})();
