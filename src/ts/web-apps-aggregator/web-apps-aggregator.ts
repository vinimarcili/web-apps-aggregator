import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { msg, localized, updateWhenLocaleChanges } from '@lit/localize'
import style from '../../../src/assets/styles/css/variables.css'
import global from '../../../src/assets/styles/scss/global.scss'
import customElementStyles from './web-apps-aggregator.scss'
import { classMap } from 'lit/directives/class-map.js'
import icons from '../icons/icons'

@localized()
@customElement('web-apps-aggregator')
export class MyElement extends LitElement {
  @property({ type: String }) theme: 'dark' | 'light' | '' = 'dark'

  @state() private open = false

  private items: Array<{
    title: string
    icon: 'squid' | 'instagram' | 'pay'
    color?: string
    url: string
  }> = []

  constructor() {
    super()
    updateWhenLocaleChanges(this)
    super.connectedCallback()
    document.addEventListener('click', (event) => {
      if (!event.composedPath().includes(this)) {
        this.close()
      }
    })
  }

  static override get styles() {
    return [style, global, customElementStyles]
  }

  override render() {
    this.items = [
      {
        title: 'Website',
        icon: 'squid',
        url: 'https://squidit.com.br/',
        color: '#f93d97',
      },
      {
        title: 'Portal',
        icon: 'squid',
        url: 'https://portal.squidit.com.br/login',
        color: '#FED708',
      },
      {
        title: 'Hub',
        icon: 'squid',
        url: 'https://app.squidit.com.br/',
        color: '#5ACAED',
      },
      {
        title: 'Pay',
        icon: 'pay',
        url: 'https://app.squidit.com.br/',
        color: '#01A14B',
      },
      {
        title: msg('Influence Club'),
        icon: 'squid',
        url: 'https://clubedainfluencia.com.br/',
        color: '#ca1862',
      },
      {
        title: 'Central',
        icon: 'squid',
        url: 'http://central.squidit.com.br/',
        color: '#495057',
      },
      {
        title: 'Instagram',
        icon: 'instagram',
        url: 'https://www.instagram.com/squidinfluencers/',
        color: '#F42A9C',
      },
    ]

    return html`
      <button
        @click=${this._toggle}
        part="button"
        class=${classMap({
          'theme-dark': this.theme === 'dark',
          'theme-light': this.theme === 'light',
          toggle: true,
          open: this.open,
        })}
        title="Apps"
      >
        <svg focusable="false" viewBox="0 0 24 24">
          <path
            d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
          ></path>
        </svg>
      </button>
      <nav
        class=${classMap({
          nav: true,
          open: this.open,
          'theme-dark': this.theme === 'dark',
          'theme-light': this.theme === 'light',
        })}
      >
        <ul>
          ${this.items.map((item) => {
            return html`
              <li>
                <a href=${item?.url} target="_blank" .title=${item?.title} class="icon-${item?.color}">
                  ${icons[item.icon as 'instagram' | 'pay' | 'squid']()}
                  <span>${item?.title}</span>
                </a>
              </li>
            `
          })}
        </ul>
      </nav>
    `
  }

  private _toggle() {
    this.open = !this.open
    this.dispatchEvent(new CustomEvent('open-changed'))
  }

  close() {
    this.open = false
    this.dispatchEvent(new CustomEvent('open-changed'))
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'web-apps-aggregator': MyElement
  }
}
