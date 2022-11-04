async function enviarDatos( user, pass ){

    const comando = {
        uri: 'almatec.web.login',
        parametros: {
            tipoUsuario: 'Revendedor',
            user: this.user,
            pass: this.pass
        }
    }

    return await fetch("")

}

