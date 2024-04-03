class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div tabindex="0" class="hero__text">
          <h1 class="hero__title">Welcome to Resto</h1>
  
          <p class="hero__subtitle">
            Food is the ingredient that bind us together and nothing brings people together like a good food
          </p>
  
          <a href="#main-content" class="btn">Read More</a>
        </div>
      `;
  }
}

customElements.define('hero-content', HeroContent);
