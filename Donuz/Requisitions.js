const fetch= require('node-fetch');
const base_url = 'https://www.donuz.co/api/v1/';
var config = require('../config.json')
const token = config.token;

export async function get(url, header = null) {
    if (header == null){
        header = {
            'token': token
        }
    }
    let obj = await fetch(base_url + url, {
            headers: header
        })
        .then((data) => (data.json())).catch((data) => console.log(data));
    return obj;
}
export async function post(url, header, parameter) {
    let obj = await fetch(base_url + url, {
            method: 'POST',
            headers: header,
            body: parameter,
            json: true
        }).then((data) => (data.json())).catch((data) => console.log(data));
    return obj;
}