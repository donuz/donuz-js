import {
    post
} from '../Requisitions';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))

export var share = {
    getHash: function (tokenCliente) {
        let data = {
            'acao': 'inserir',
            'estabelecimento': config.estabelecimento_id,
            'termo': 'config'
        };

        return post('redessociais', {
            'Token': config.token,
            'Token-Cliente': tokenCliente
        }, data);
    }
}