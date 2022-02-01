import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { msg, localized, updateWhenLocaleChanges } from '@lit/localize'
import style from '../../../src/assets/styles/css/variables.css'
import global from '../../../src/assets/styles/scss/global.scss'
import customElementStyles from './custom-element.scss'

@localized()
@customElement('my-element')
export class MyElement extends LitElement {
  constructor() {
    super()
    updateWhenLocaleChanges(this)
  }

  @property() greeting = 'Welcome'
  // static override styles = css`
  //   @import '/assets/styles/css/variables.css';
  //   :host {
  //     display: block;
  //     border: solid 1px gray;
  //     padding: 16px;
  //     max-width: 800px;
  //     background-color: var(--red);
  //   }
  // `

  static override get styles() {
    return [style, global, customElementStyles]
  }

  @property()
  name = 'World'

  @property({ type: Number })
  count = 0

  override render() {
    return html`
      <h1>${this.sayHello(this.name)}!</h1>
      <button @click=${this._onClick} part="button">${msg('Click Count')}: ${this.count}</button>
      <slot></slot>
    `
  }

  private _onClick() {
    this.count++
    this.dispatchEvent(new CustomEvent('count-changed'))
  }

  sayHello(name: string): string {
    return this.greeting + ` Hello, ${name}`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
