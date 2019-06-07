import {
    post
} from '../Requisitions';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))

export var computableCode = {
    getFields: function () {
        let data = {
            'acao': 'buscar',
            'estabelecimento': config.estabelecimento_id,
            'termo': 'config'
        };

        return post('codigoPontuavel', {
            'Token': config.token
        }, data);
    },
    insertCode: function (tokenCliente, data) {
        data.acao = 'inserir';
        data.estabelecimento = config.estabelecimento_id;

        return post('codigoPontuavel', {
            'Token': config.token,
            'Token-Cliente': tokenCliente
        }, data);
    }
}