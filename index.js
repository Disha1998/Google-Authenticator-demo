const speakeasy = require('speakeasy')
const qrcode = require('qrcode')

let secret = speakeasy.generateSecret({
    name: "DishaTesting"
})
console.log(secret);

qrcode.toDataURL(secret.otpauth_url,function(err,data){
    console.log(data);
})