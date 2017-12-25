class HomeComponent {
  constructor(salutation) {
    this.salutation = salutation;
  }

  render() {
    return `${this.salutation} You are using Webpack 3 with Babel ES6!`;
  }
}

export default HomeComponent;