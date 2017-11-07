class Home {
  constructor(salutation) {
    this.salutation = salutation;
  }

  greet() {
    return `${this.salutation} You are using Webpack 3 with Babel ES6!`;
  }
}

export default Home;