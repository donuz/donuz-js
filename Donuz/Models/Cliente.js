"use strict";
import {
    get,
    post
} from '../Requisitions';
var config = require('../../config.json');

export var clients = {
    signIn: function (login, password) {
        let data = {
            'acao': 'logar',
            'estabelecimento': config.estabelecimento_id,
            'login': login,
            'senha': password
        };

        return post('login', {
            'token': config.token
        }, data);
    },
    getInfoCustomer: function (tokenCliente, cpfCliente) {
        return get('cliente/' + config.estabelecimento_id + '/' + cpfCliente, {
            'Token': config.token,
            'Token-Cliente': tokenCliente
        });
    },
    signUp: function (data) {
        data.acao = 'inserir';
        data.estabelecimento = config.estabelecimento_id;

        return post('cliente', {
            'Token': config.token
        }, data);
    },
    signInByEmail: function (login) {
        let data = {
            'acao': 'logarOnlyEmail',
            'estabelecimento': config.estabelecimento_id,
            'login': login
        };

        return post('login', {
            'Token': config.token
        }, data);
    },
    updateCustomer: function (data, tokenCliente) {
        data.acao = 'editar';
        data.estabelecimento = config.estabelecimento_id;

        return post('cliente', {
            'Token': config.token,
            'Token-Cliente ': tokenCliente
        }, data);
    },
    forgotPassword: function (email) {
        let data = {
            'acao': 'lembrar',
            'estabelecimento': config.estabelecimento_id,
            'email': email
        };

        return post('cliente', {
            'Token': config.token
        }, data);
    },
    getCustomFields: function () {
        return get('camposAdicionais/' + config.estabelecimento_id + '/cliente', {
            'Token': config.token
        });
    }
}