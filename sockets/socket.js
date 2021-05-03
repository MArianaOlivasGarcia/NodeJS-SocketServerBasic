const { io } = require('../index');


// Mensajes de Sockets
/* client es un dispositivo que se acanba de conectar a mi socket server */
/* io es todo el servidor, todos los clientes conectador */
io.on('connection', client => {
    console.log('Cliente conectado');


    client.on('mensaje', ( payload ) => {
        console.log(payload);
        io.emit('mensaje', { admin: 'Hola desde el servidor'})
    });

    // Callback que se ejecuta cuando el client se desconecta
    client.on('disconnect', () => {
        console.log('Cliente desconectado');
    })
})