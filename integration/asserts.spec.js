/// <reference types="cypress" />

it('Equality', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1); // espero que 'a' seja igual a '1' com 'to be' não muda nada mas fica mais legível
    expect('a').not.to.be.equal('b')
})

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
})

it('Object Equality', () => {
    const obj = {
        a:1,
        b:2
    }

    expect(obj).equal(obj) //forma de comparar ele mesmo
    expect(obj).equals(obj) //forma de comparar ele mesmo
    expect(obj).eq(obj) //forma de comparar ele mesmo
    expect(obj).to.be.equal(obj) //forma de comparar ele mesmo
    expect(obj).to.be.deep.equal({a:1, b:2})//verif. valores dos obj.
    expect(obj).eql({a:1, b:2}) //verificar valores dos obj.
    expect(obj).include({a:1})
    expect(obj).to.have.property('b') //se possuí prop. 'b'
    expect(obj).to.not.be.empty // obj não seja vazio
    expect({}).to.be.empty
})

it('Arrays', () => {
    const arr = [1, 2, 3]
    expect(arr).to.have.members([1, 2, 3]) //membros já incluidos
    expect(arr).to.include.members([1, 3]) //incluir membros
    expect(arr).to.not.be.empty //verif. array vazio
    expect([]).to.be.empty //verif. array vazio esteja vazio
})

it('Types', () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('String')
    expect({}).to.be.an('object')
    expect([]).to.be.an('array')
})

it('String', () => {
    const str = 'String de teste'
    
    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15) //verif. tam da string de 15
    expect(str).to.contains('de') //espero q string contenha 'de'
    expect(str).to.match(/de/)
    expect(str).to.match(/^String/) //'^' deve iniciar com 'String'
    expect(str).to.match(/teste$/) //'$ deve finalizar com 'teste'
    expect(str).to.match(/.{15}/) //'.' verificar tamanho esperado
    expect(str).to.match(/\w+/) //'\w' verificar existe apenas letras
    expect(str).to.match(/\D+/) //'\D' verificar que não existe n°
})

it('Numbers', () =>{
    const number = 4
    const floatNumber = 5.2123

    expect(number).to.be.equal(4) //seja igual a 4 
    expect(number).to.be.above(3) //seja maior que 3
    expect(number).to.be.below(7) //seja menor que 7 
    expect(floatNumber).to.be.equal(5.2123)
    expect(floatNumber).to.be.closeTo(5.2, 0.1) //float seja prox. de 5.2'
    expect(floatNumber).to.be.above(5) //float seja acima de 5
})
