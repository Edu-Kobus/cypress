it('nada agora', function() {})

// function soma(a, b) {
//     return a + b;
// }


// const soma = function (a, b) {
//     return a + b;
// }

// const soma = (a, b) => a + b //com arrow function já entende que o que vem dps é o retorno

// const soma = (a, b) => {
//     return a + b
// }

// const soma = (a) => a + a

// const soma = a => a + a

const soma = () => 5 + 5

console.log(soma(1,4))

it('an arrow test...', () => {
    console.log('Arrow', this)
})