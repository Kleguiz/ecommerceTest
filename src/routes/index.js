const express = require ('express')
const router = express.Router()
const data = require ('../../data.json')

router.get("/productos", (req, res) => {
    res.json(data)
} )
router.post("/productos")

module.exports = router