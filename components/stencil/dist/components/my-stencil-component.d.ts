import type { Components, JSX } from "../types/components";

interface MyStencilComponent extends Components.MyStencilComponent, HTMLElement {}
export const MyStencilComponent: {
  prototype: MyStencilComponent;
  new (): MyStencilComponent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
