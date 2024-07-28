const express = require('express')
const router = express.Router()
const {
    getMenuMakan, 
    createMenuMakan, 
    updateMenuMakan, 
    deleteMenuMakan,
    createPesanan
} = require('../controllers/menuController')

router.get('/', getMenuMakan)
router.post('/', createMenuMakan)
router.patch('/:id', updateMenuMakan)
router.delete('/:id', deleteMenuMakan)
router.post('/pesanan', createPesanan)

module.exports = router