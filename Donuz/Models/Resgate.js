import {
    get,
    post
} from '../Requisitions';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))

export var rescues = {
    redeemRewards: function (tokenCliente, data) {
        data.acao = inserir;
        data.estabelecimento = config.estabelecimento_id;

        return post('resgate', {
            'Token': config.token,
            'Token-Cliente': tokenCliente
        }, data);
    },
    getRedeemption: function (idResgate, tokenCliente) {
        return get('resgate/' + config.estabelecimento_id +
            '/' + idResgate, {
                'Token': config.token,
                'Token-Cliente': tokenCliente
            });
    },
    getRedeemptionsByCustomer: function (tokenCliente) {
        return get('resgate/' + config.estabelecimento_id, {
            'Token': config.token,
            'Token-Cliente': tokenCliente
        });
    }
}