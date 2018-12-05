import {
    get,
    post
} from '../Requisitions';
var config = require('../../config.json');

export var estabelishment = {
    getInfoStore: function () {
        return get('estabelecimento/' + config.estabelecimento_id, {
            'Token': config.token
        });
    }
}