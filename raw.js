
const express = require('express')
const app = express()
const port = 3001

app.use(express.json())
app.get('/menu', (req, res) => {
    res.status(200).json(
        {
            message : "Berikut daftar menu makan",
            data : [
                { 
                    id: 1, 
                    menu : 'Ayam Goreng', 
                    harga : 20000
                }
            ]
        }
    )
})

app.post('/menu', (req, res)=>{
    res.status(201).json({
        message : "data berhasil ditambahkan",
        data : req.body
    })

})

app.patch('/menu/:id', (req, res)=>{
    const { id }= req.params
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
})

app.delete('/menu/:id', (req, res)=>{
    const { id } = req.params
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
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})