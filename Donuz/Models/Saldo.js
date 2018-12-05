import {
    get,
} from '../Requisitions';
var config = require('../../config.json');

export var balance = {
    getCustomerBalance: function (tokenCliente) {
        return get('saldo/' + config.estabelecimento_id, {
            'Token': config.token,
            'Token-Cliente': tokenCliente
        });
    }
}