const ServiceApi = require('../services/api')

class ControllerApi {
    Somar(req, res) {

        try {
            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceApi.Somar(num1, num2)

            res.status(200).send({ resultado })
        } catch (error) {
            console.error(error)
            res.status(400).send({ msg: error.message })
        }

    }
    Sub(req, res) {

        try {
            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceApi.Sub(num1, num2)

            res.status(200).send({ resultado })
        } catch (error) {
            console.error(error)
            res.status(400).send({ msg: error.message })
        }

    }
    Mult(req, res) {

        try {
            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceApi.Mult(num1, num2)

            res.status(200).send({ resultado })
        } catch (error) {
            console.error(error)
            res.status(400).send({ msg: error.message })
        }

    }
    Div(req, res) {

        try {
            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceApi.Div(num1, num2)

            res.status(200).send({ resultado })
        } catch (error) {
            console.error(error)
            res.status(400).send({ msg: error.message })
        }

    }
    Power(req, res) {

        try {
            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceApi.Power(num1, num2)

            res.status(200).send({ resultado })
        } catch (error) {
            console.error(error)
            res.status(400).send({ msg: error.message })
        }

    }
    Root(req, res) {

        try {
            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceApi.Root(num1, num2)

            res.status(200).send({ resultado })
        } catch (error) {
            console.error(error)
            res.status(400).send({ msg: error.message })
        }

    }
}

module.exports = new ControllerApi()