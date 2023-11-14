import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class MyComponent extends LitElement {
  static styles = css`
    h2 {
      font-size: 20px;
      color: #0037b7;
    }
    p {
      color: blue;
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
      <h2>Hello, ${this.name}!</h2>
      <p>clicked : ${this.clicked}</p>
    `;
  }
}
customElements.define("my-component", MyComponent);
