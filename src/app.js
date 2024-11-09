const {envs} = require('./config/env')
const { iniciaServer } = require('./server/server')

const  main = () =>{
    iniciaServer({
        port:envs.PORT, 
        public_path:envs.PUBLIC_PATH
    })
}


// Funcion agnóstica por no tener Nombre y auto convocada
(async()=>{
    main()
})() 