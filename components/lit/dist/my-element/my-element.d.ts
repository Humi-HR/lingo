import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MyElement extends LitElement {
    static styles: import("lit").CSSResult;
    name: string;
    count: number;
    render(): import("lit-html").TemplateResult<1>;
    private _onClick;
    sayHello(name: string): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-lit-element': MyElement;
    }
}
//# sourceMappingURL=my-element.d.ts.map