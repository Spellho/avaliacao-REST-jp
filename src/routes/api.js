const express = require('express')
const ControllerApi = require('../controllers/api')

const router = express.Router();

router.get('/', (req, res) => {
    const op = [
        "somar: /api/somar",
        "subtrair: /api/sub",
        "multiplicar: /api/mult",
        "dividir: /api/div",
        "potência: /api/power",
        "raiz: /api/raiz"];
    res.json({ message: op })
})
router.post('/api/somar', ControllerApi.Somar)
router.post('/api/sub', ControllerApi.Sub)
router.post('/api/mult', ControllerApi.Mult)
router.post('/api/div', ControllerApi.Div)
router.post('/api/power', ControllerApi.Power)
router.post('/api/root', ControllerApi.Root)

module.exports = router