import {
    post
} from '../Requisitions';
var config = require('../../config.json');

export var mails = {
    sendMail: function (data) {
        data.acao = 'enviar';
        data.estabelecimento = config.estabelecimento_id;

        return post('contato', {
            'Token': config.token
        }, data);
    }
}