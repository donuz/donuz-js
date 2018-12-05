import {
    get,
    post
} from '../Requisitions';
var config = require('../../config.json');

export var gifts = {
    getGift: function (idResgate, tokenCliente) {
        let headers = {
            'Token': config.token,
            'Token-Cliente': tokenCliente
        };
        let resgate = get('presente/' + config.estabelecimento_id + '/' + idResgate, headers);
        return resgate;
    },
    getGiftInfo: function (idResgate, tokenCliente) {
        let headers = {
            'Token': config.token,
            'Token-Cliente': tokenCliente
        };
        let resgate = get('presente/' + config.estabelecimento_id + '/' + idResgate, headers);

        return resgate;
    },
    getGifts: function (tokenCliente) {
        let headers = {
            'Token': config.token,
            'Token-Cliente': tokenCliente
        };
        let resgates = get('presente/' + config.estabelecimento_id, headers);

        return resgates;
    },
    countGifts: function (tokenCliente) {
        let headers = {
            'Token': config.token,
            'Token-Cliente': tokenCliente
        };
        let resgates = get('presente/' + config.estabelecimento_id, headers);

        if (resgates.status == 200) {
            return resgates.total;
        }

        return 0;
    }
}