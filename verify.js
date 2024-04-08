var speakeasy = require("speakeasy");


let verified = speakeasy.totp.verify({
    secret: '0ax]]eCzf!3o]z&DiUbsPhRS[i>n9MHs',
    encoding: 'ascii',
    token: '870654'
})
console.log(verified);