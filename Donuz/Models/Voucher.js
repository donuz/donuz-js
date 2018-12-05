import {
    post
} from '../Requisitions';
var config = require('../../config.json');

export var voucher = {
    updateStatusVoucher: function (codigoVoucher, statusVoucher) {

        let data = {
            'acao': 'editar',
            'voucher': codigoVoucher,
            'status': statusVoucher
        };

        return post('voucher', {
            'Token': config.token
        }, data);
    }
}