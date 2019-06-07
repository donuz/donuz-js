import {
    get,
} from '../Requisitions';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))

export var balance = {
    getCustomerBalance: function (tokenCliente) {
        return get('saldo/' + config.estabelecimento_id, {
            'Token': config.token,
            'Token-Cliente': tokenCliente
        });
    }
}