const base_url = 'https://www.donuz.co/api/v1/';
var path= require('path');
var config = require(path.resolve('donuz-config/config.json'))
const token = config.token;

export async function get(url, header = null) {
    if (header == null){
        header = {
            'token': token
        }
    }
    header.token = config.token
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
            body: JSON.stringify(parameter),
            json: true
        }).then((data) => (data.json())).catch((data) => console.log(data));
    return obj;
}