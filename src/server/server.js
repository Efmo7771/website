const express = require('express')
const path = require('path')

const iniciaServer = (op) => {
    const { port,public_path = 'public'} = op
    
    const app = express()
    // Para usar middlewares 
    app.use(express.static(public_path)) // El use activa los middlewares.  El contenido (estatico) de la carpeta queda disponible
    app.get('*', (req, res)=>{
        const indice = path.join(__dirname+`../../../${public_path}/index.html`)
        res.sendFile(indice)
    })
    app.listen(port, ()=> {
        console.log(`Escuchando por el puerto ${port}`)
    })
}

module.exports = {
    iniciaServer
}