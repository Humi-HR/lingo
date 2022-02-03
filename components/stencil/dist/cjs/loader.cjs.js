'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9b976aa3.js');

/*
 Stencil Client Patch Esm v2.13.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["my-stencil-component.cjs",[[1,"my-stencil-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
