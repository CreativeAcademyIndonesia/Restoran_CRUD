const { get, insert, update, deleted, insertPesanan } = require('../models/menuModel')
const getMenuMakan = async (req, res) => {
    try{
        const data = await get()
        res.status(200).json({
            message : "Berikut data menu makan", 
            data : data
        })
    }catch(err){
        res.status(500).json({
            message : "Internal server error", 
            data : []
        })
    }
}

const createMenuMakan = async (req, res)=>{
    try{
        const data = await insert(req.body)
        res.status(201).json({
            message : "data berhasil ditambahkan",
            data : req.body
        })
    }catch(err){
        res.status(500).json({
            message : "Internal server error", 
            data : []
        })
    }
}

const updateMenuMakan = async (req, res)=>{
    try{
        const { id } = req.params
        const data = await update(req.body, id)
        res.status(200).json({
            message : "data berhasil diupdate",
            data :  [
                { 
                    id: 1, 
                    menu : 'Ayam Goreng', 
                    harga : 20000
                }
            ]
        })
    }catch(err){
        res.status(500).json({
            message : "Internal server error", 
            data : []
        })
    }
}

const deleteMenuMakan = async (req, res)=>{
    try{
        const { id } = req.params
        const result = await deleted(id)
        console.log(result)
        res.status(200).json({
            message : "data berhasil di delete",
            data :  [
                { 
                    id: 1, 
                    menu : 'Ayam Goreng', 
                    harga : 20000
                }
            ]
        })
    }catch(err){
        res.status(500).json({
            message : "Internal server error", 
            data : []
        })
    }
}

const createPesanan = async (req, res)=>{
    try{
        const data = await insertPesanan(req.body)
        res.status(201).json({
            message : "pesanan berhasil ditambahkan",
            data : req.body
        })
    }catch(err){
        res.status(500).json({
            message : "Internal server error", 
            data : []
        })
    }
}

module.exports = {
    getMenuMakan, 
    createMenuMakan, 
    updateMenuMakan, 
    deleteMenuMakan,
    createPesanan
}