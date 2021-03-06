import { p as promiseResolve, b as bootstrapLazy } from './index-bb8f8e49.js';

/*
 Stencil Client Patch Browser v2.13.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["my-stencil-component",[[1,"my-stencil-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
