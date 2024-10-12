class ServiceApi {

    Somar(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("informe somente números")
        }
        return num1 + num2
    }

    Sub(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("informe somente números")
        }
        return num1 - num2
    }

    Mult(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("informe somente números")
        }
        return num1 * num2
    }

    Div(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("informe somente números")
        }
        if(num2==0) {
            throw new Error("não pode dividir por zero")
        }
        return num1 / num2
    }

    Power(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("informe somente números")
        }
        if(num1==0 && num2<0) {
            throw new Error("0 não pode ser potencializado por números negativos")
        }
        if(num1<0 && num2<1 && num2>0) {
            return this.Root(num1, 1/num2)
        }
        return Math.pow(num1, num2)
    }

    Root(num1, num2) {
        if(isNaN(num1) || isNaN(num2)) {
            throw new Error("informe somente números")
        }
        if(num1==0 && num2<0) {
            throw new Error("segundo número não pode ser negativo se o primeiro for 0")
        }
        if(num2==0) {
            throw new Error("o segundo número não pode ser 0")
        }
        if(num1<0 && num2%2==0) {
            
        return Math.pow(-num1, 1/num2)+'i'
        } else if(num1<0 && num2%2!=0) {
            
        return -Math.pow(-num1, 1/num2)
        } 
        return Math.pow(num1, 1/num2)
    }

}

module.exports = new ServiceApi()