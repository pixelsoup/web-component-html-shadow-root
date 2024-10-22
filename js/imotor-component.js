class ImotorComponent extends HTMLElement {
  constructor() {
      super();
      // The shadow root is automatically created from the template
      const template = document.getElementById('imotor-template');
      const templateContent = template.content;

      // Attach the shadow root and append the template content
      this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));
  }
}

// Define the custom element
customElements.define('imotor-component', ImotorComponent);