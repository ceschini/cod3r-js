function Pessoa() {
    this.idade = 0;

    const self = this;
    // a cada 1000ms dispara func
    setInterval(function () {
        self.idade++;
        console.log(self.idade);
    }/*.bind(this)*/, 1000)
}

new Pessoa;