import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class MyComponent extends LitElement {
  static styles = css`
    .my-component-div {
      cursor: pointer !important;
    }
    h2 {
      font-size: 20px;
      color: #0037b7;
      text-align: center;
    }
    p {
      color: blue;
      font-size: 16px;
      text-align: center;
    }
    p span {
      color: #666;
      font-size: 14px;
      text-align: center;
    }
  `;

  static properties = {
    name: { type: String },
    clicked: { type: Number },
  };

  constructor() {
    super();
    this.name = "Somebody";
    this.clicked = 0;
  }

  render() {
    return html`
      <div class="my-component-div">
        <h2>Hello, ${this.name}!</h2>
        <p>Clicked : ${this.clicked}</p>
        <br />
        <p><span>Click anywhere in the iFrame !!</span></p>
      </div>
    `;
  }
}
customElements.define("my-component", MyComponent);
