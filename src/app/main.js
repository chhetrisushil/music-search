/*
 * main.js
 * Copyright (C) 2017 Sushil Chhetri <chhetrisushil@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
/*jshint esnext: true*/
import {test} from './views/appView.js';

let testImport = document.querySelector('link[rel="import"]');

let clone = document.importNode(testImport.import.querySelector('template').content, true);

document.body.appendChild(clone);

test();
