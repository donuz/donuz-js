import {
    get,
    post
} from '../Requisitions';
var config = require('../../config.json');
export var categories= {
    getCategories: function() {
        return get('categoria/' + config.estabelecimento_id);
    },
    getInfoCategory: function (idCategoria, idSubcategoria = null) {
        let dados = {
            'acao': 'buscar',
            'estabelecimento': config.estabelecimento_id,
            'categoria': idCategoria,
            'subcategoria': idSubcategoria
        };
    
        return post('categoria', {'token': config.token}, dados);
    },
    getSubCategories: function (idCategoria) {
        return get('categoria/' + config.estabelecimento_id + '/' + idCategoria, {'token': config.token});
    }
}
