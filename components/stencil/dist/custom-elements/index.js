import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";

let MyComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    return h("div", null, "Hello, World! I'm ", this.getText());
  }
  static get style() { return myComponentCss; }
};

const MyStencilComponent = /*@__PURE__*/proxyCustomElement(MyComponent, [1,"my-stencil-component",{"first":[1],"middle":[1],"last":[1]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      MyStencilComponent
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { MyStencilComponent, defineCustomElements };
