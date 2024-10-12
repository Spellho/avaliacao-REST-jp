const { describe, it, expect } = require('@jest/globals')
const ServiceApi = require('../src/services/api')

describe("Testando função somar", () => {
    it("somando dois números positivos", () => {
        const result = ServiceApi.Somar(1, 2)

        expect(result).toBe(3)
    })
    
    it("somando dois números negativos", () => {
        const result = ServiceApi.Somar(-1, -2)

        expect(result).toBe(-3)
    })
    
    it("somando um número positivos e um negativo", () => {
        const result = ServiceApi.Somar(1, -2)

        expect(result).toBe(-1)
    })
    
    it("somando um número negativo e um positivo", () => {
        const result = ServiceApi.Somar(-1, 2)

        expect(result).toBe(1)
    })

    it("somando um número positivos e uma letra", () => {
        const result = () => ServiceApi.Somar(1, 'a')

        expect(result).toThrow('informe somente números')
    })

    it("somando um número negativo e uma letra", () => {
        const result = () => ServiceApi.Somar(-1, 'a')

        expect(result).toThrow('informe somente números')
    })

    it("somando uma letra e um número positivos", () => {
        const result = () => ServiceApi.Somar('a', 1)

        expect(result).toThrow('informe somente números')
    })

    it("somando uma letra e um número negativo", () => {
        const result = () => ServiceApi.Somar('a', -1)

        expect(result).toThrow('informe somente números')
    })

    it("somando um número positivo e zero", () => {
        const result = ServiceApi.Somar(2, 0)

        expect(result).toBe(2)
    })

    it("somando um número negativo e zero", () => {
        const result = ServiceApi.Somar(-2, 0)

        expect(result).toBe(-2)
    })

    it("somando zero e um número positivos", () => {
        const result = ServiceApi.Somar(0, 2)

        expect(result).toBe(2)
    })

    it("somando zero e um número negativo", () => {
        const result = ServiceApi.Somar(0, -2)

        expect(result).toBe(-2)
    })

    it("somando zero e zero", () => {
        const result = ServiceApi.Somar(0, 0)

        expect(result).toBe(0)
    })
})

describe("Testando função sub", () => {
    it("subtraindo um número positivo por um positivo", () => {
        const result = ServiceApi.Sub(1, 2)

        expect(result).toBe(-1)
    })
    
    it("subtraindo um número negativo por um negativo", () => {
        const result = ServiceApi.Sub(-1, -2)

        expect(result).toBe(1)
    })
    
    it("subtraindo um número positivo por um negativo", () => {
        const result = ServiceApi.Sub(1, -2)

        expect(result).toBe(3)
    })
    
    it("subtraindo um número negativo por um positivo", () => {
        const result = ServiceApi.Sub(-1, 2)

        expect(result).toBe(-3)
    })

    it("subtraindo um número positivos por uma letra", () => {
        const result = () => ServiceApi.Sub(1, 'a')

        expect(result).toThrow('informe somente números')
    })

    it("subtraindo um número negativo por letra", () => {
        const result = () => ServiceApi.Sub(-1, 'a')

        expect(result).toThrow('informe somente números')
    })

    it("subtraindo uma letra por um número positivos", () => {
        const result = () => ServiceApi.Sub('a', 1)

        expect(result).toThrow('informe somente números')
    })

    it("subtraindo uma letra por um número negativo", () => {
        const result = () => ServiceApi.Sub('a', -1)

        expect(result).toThrow('informe somente números')
    })

    it("subtraindo um número positivo por zero", () => {
        const result = ServiceApi.Sub(2, 0)

        expect(result).toBe(2)
    })

    it("subtraindo um número negativo por zero", () => {
        const result = ServiceApi.Sub(-2, 0)

        expect(result).toBe(-2)
    })

    it("subtraindo zero por um número positivo", () => {
        const result = ServiceApi.Sub(0, 2)

        expect(result).toBe(-2)
    })

    it("subtraindo zero por um número negativo", () => {
        const result = ServiceApi.Sub(0, -2)

        expect(result).toBe(2)
    })

    it("subtraindo zero por zero", () => {
        const result = ServiceApi.Sub(0, 0)

        expect(result).toBe(0)
    })
})

describe("Testando função mult", () => {
    it("multiplicando um número positivo por um positivo", () => {
        const result = ServiceApi.Mult(1, 2)

        expect(result).toBe(2)
    })
    
    it("multiplicando um número negativo por um negativo", () => {
        const result = ServiceApi.Mult(-1, -2)

        expect(result).toBe(2)
    })
    
    it("multiplicando um número positivo por um negativo", () => {
        const result = ServiceApi.Mult(1, -2)

        expect(result).toBe(-2)
    })
    
    it("multiplicando um número negativo por um positivo", () => {
        const result = ServiceApi.Mult(-1, 2)

        expect(result).toBe(-2)
    })

    it("multiplicando um número positivos por uma letra", () => {
        const result = () => ServiceApi.Mult(1, 'a')

        expect(result).toThrow('informe somente números')
    })

    it("multiplicando um número negativo por letra", () => {
        const result = () => ServiceApi.Mult(-1, 'a')

        expect(result).toThrow('informe somente números')
    })

    it("multiplicando uma letra por um número positivos", () => {
        const result = () => ServiceApi.Mult('a', 1)

        expect(result).toThrow('informe somente números')
    })

    it("multiplicando uma letra por um número negativo", () => {
        const result = () => ServiceApi.Mult('a', -1)

        expect(result).toThrow('informe somente números')
    })

    it("multiplicando um número positivo por zero", () => {
        const result = ServiceApi.Mult(2, 0)

        expect(result).toBe(0)
    })

    it("multiplicando um número negativo por zero", () => {
        const result = ServiceApi.Mult(-2, 0)

        expect(result).toBe(-0)
    })

    it("multiplicando zero por um número positivo", () => {
        const result = ServiceApi.Mult(0, 2)

        expect(result).toBe(0)
    })

    it("multiplicando zero por um número negativo", () => {
        const result = ServiceApi.Mult(0, -2)

        expect(result).toBe(-0)
    })

    it("multiplicando zero por zero", () => {
        const result = ServiceApi.Mult(0, 0)

        expect(result).toBe(0)
    })
})

describe("Testando função div", () => {
    it("dividindo um número positivo por um positivo", () => {
        const result = ServiceApi.Div(1, 2)

        expect(result).toBe(0.5)
    })
    
    it("dividindo um número negativo por um negativo", () => {
        const result = ServiceApi.Div(-1, -2)

        expect(result).toBe(0.5)
    })
    
    it("dividindo um número positivo por um negativo", () => {
        const result = ServiceApi.Div(1, -2)

        expect(result).toBe(-0.5)
    })
    
    it("dividindo um número negativo por um positivo", () => {
        const result = ServiceApi.Div(-1, 2)

        expect(result).toBe(-0.5)
    })

    it("dividindo um número positivos por uma letra", () => {
        const result = () => ServiceApi.Div(1, 'a')

        expect(result).toThrow('informe somente números')
    })

    it("dividindo um número negativo por letra", () => {
        const result = () => ServiceApi.Div(-1, 'a')

        expect(result).toThrow('informe somente números')
    })

    it("dividindo uma letra por um número positivos", () => {
        const result = () => ServiceApi.Div('a', 1)

        expect(result).toThrow('informe somente números')
    })

    it("dividindo uma letra por um número negativo", () => {
        const result = () => ServiceApi.Div('a', -1)

        expect(result).toThrow('informe somente números')
    })

    it("dividindo um número positivo por zero", () => {
        const result = () => ServiceApi.Div(2, 0)

        expect(result).toThrow('não pode dividir por zero')
    })

    it("dividindo um número negativo por zero", () => {
        const result = () => ServiceApi.Div(-2, 0)

        expect(result).toThrow('não pode dividir por zero')
    })

    it("dividindo zero por um número positivo", () => {
        const result = ServiceApi.Div(0, 2)

        expect(result).toBe(0)
    })

    it("dividindo zero por um número negativo", () => {
        const result = ServiceApi.Div(0, -2)

        expect(result).toBe(-0)
    })

    it("dividindo zero por zero", () => {
        const result = () => ServiceApi.Div(0, 0)

        expect(result).toThrow('não pode dividir por zero')
    })
})

describe("Testando função power", () => {
    it("potencializando um número positivo por um positivo", () => {
        const result = ServiceApi.Power(3, 3)

        expect(result).toBe(27)
    })
    
    it("potencializando um número negativo por um negativo", () => {
        const result = ServiceApi.Power(-3, -3)

        expect(result).toBe(-0.037037037037037035)
    })
    
    it("potencializando um número positivo por um negativo", () => {
        const result = ServiceApi.Power(3, -3)

        expect(result).toBe(0.037037037037037035)
    })
    
    it("potencializando um número negativo por um positivo", () => {
        const result = ServiceApi.Power(-3, 3)

        expect(result).toBe(-27)
    })

    it("potencializando um número positivos por uma letra", () => {
        const result = () => ServiceApi.Power(3, 'a')

        expect(result).toThrow('informe somente números')
    })

    it("potencializando um número negativo por letra", () => {
        const result = () => ServiceApi.Power(-3, 'a')

        expect(result).toThrow('informe somente números')
    })

    it("potencializando uma letra por um número positivos", () => {
        const result = () => ServiceApi.Power('a', 3)

        expect(result).toThrow('informe somente números')
    })

    it("potencializando uma letra por um número negativo", () => {
        const result = () => ServiceApi.Power('a', -3)

        expect(result).toThrow('informe somente números')
    })

    it("potencializando um número positivo por zero", () => {
        const result = ServiceApi.Power(3, 0)

        expect(result).toBe(1)
    })

    it("potencializando um número negativo por zero", () => {
        const result = ServiceApi.Power(-3, 0)

        expect(result).toBe(1)
    })

    it("potencializando um número negativo por decimal", () => {
        const result = ServiceApi.Power(-9, 0.5)

        expect(result).toBe('3i')
    })

    it("potencializando zero por um número positivo", () => {
        const result = ServiceApi.Power(0, 3)

        expect(result).toBe(0)
    })

    it("potencializando zero por um número negativo", () => {
        const result = () => ServiceApi.Power(0, -3)

        expect(result).toThrow('0 não pode ser potencializado por números negativos')
    })

    it("potencializando zero por zero", () => {
        const result = ServiceApi.Power(0, 0)

        expect(result).toBe(1)
    })
})

describe("Testando função root", () => {
    it("raiz de número positivo por um positivo", () => {
        const result = ServiceApi.Root(27, 3)

        expect(result).toBe(3)
    })
    
    it("raiz de número negativo por um negativo", () => {
        const result = ServiceApi.Root(-27, -3)

        expect(result).toBe(-0.33333333333333337)
    })
    
    it("raiz de número positivo por um negativo", () => {
        const result = ServiceApi.Root(27, -3)

        expect(result).toBe(0.33333333333333337)
    })
    
    it("raiz de número negativo por um positivo", () => {
        const result = ServiceApi.Root(-27, 3)

        expect(result).toBe(-3)
    })
    
    it("raiz de número negativo por um número par", () => {
        const result = ServiceApi.Root(-9, 2)

        expect(result).toBe('3i')
    })

    it("raiz de número positivos por uma letra", () => {
        const result = () => ServiceApi.Root(27, 'a')

        expect(result).toThrow('informe somente números')
    })

    it("raiz de número negativo por letra", () => {
        const result = () => ServiceApi.Root(-27, 'a')

        expect(result).toThrow('informe somente números')
    })

    it("raiz de letra por um número positivos", () => {
        const result = () => ServiceApi.Root('a', 3)

        expect(result).toThrow('informe somente números')
    })

    it("raiz de letra por um número negativo", () => {
        const result = () => ServiceApi.Root('a', -3)

        expect(result).toThrow('informe somente números')
    })

    it("raiz de número positivo por zero", () => {
        const result = () => ServiceApi.Root(27, 0)

        expect(result).toThrow("o segundo número não pode ser 0")
    })

    it("raiz de número negativo por zero", () => {
        const result = () => ServiceApi.Root(-27, 0)

        expect(result).toThrow("o segundo número não pode ser 0")
    })

    it("raiz de zero por um número positivo", () => {
        const result = ServiceApi.Root(0, 3)

        expect(result).toBe(0)
    })

    it("raiz de zero por um número negativo", () => {
        const result = () => ServiceApi.Root(0, -3)

        expect(result).toThrow('segundo número não pode ser negativo se o primeiro for 0')
    })

    it("raiz de zero por zero", () => {
        const result = () => ServiceApi.Root(0, 0)

        expect(result).toThrow("o segundo número não pode ser 0")
    })
})