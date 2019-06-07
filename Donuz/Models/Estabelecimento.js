import {
    get,
    post
} from '../Requisitions';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))

export var estabelishment = {
    getInfoStore: function () {
        return get('estabelecimento/' + config.estabelecimento_id, {
            'Token': config.token
        });
    }
}