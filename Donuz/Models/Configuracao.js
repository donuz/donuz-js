import {
    get
} from '../Requisitions';
var config = require('../../config.json');

export var settings = {
    getSettings: function () {
        return get('configuracao/' + config.estabelecimento_id, {
            'Token': config.token
        });
    }
}