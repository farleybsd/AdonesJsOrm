'use strict'

class TesteController {

    index(){
        return {greeting:'Hello Word in Json'}
    }

    store({request,response}){

        const {titulo,corpo} = request.all()

        response.send({mensagem:'mensagem de retorno da rota index - :' + titulo + ' ' + 'corpo - ' + corpo})
    }

    show({request,response,params}){

       

        response.send({mensagem:'mensagem de retorno da rota show   - :' + params.id})
    }


    put({request,response,params}){

       

        response.send({mensagem:'mensagem de retorno da rota put   - :' + params.id})
    }

    delete({request,response,params}){

       

        response.send({mensagem:'mensagem de retorno da rota delete   - :' + params.id})
    }
}

module.exports = TesteController
