const crypto=require ('crypto');
const createToken=(header, payload, signature)=>{    //convert header and payload into json object
    const headerJson= JSON.stringify(header);    const payload= JSON.stringify(payload);
    //base64 url encode3 json object
    const base64urlEncodedHeader= Buffer.from(headerJson).toLocaleString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_') //doing away () in the url    const base64urlEncodedpayload= Buffer.from(payloadJson).toLocaleString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_') //doing away () in the url

    //concatenated header and payload using a dot
    const signatureInput= `${base64urlEncodedHeader}. ${base64urlEncodedpayload}`;
    //USE HMACSHA256 to hash the concatenated string with the secret
    const hmac =crypto.createHmac ('sha256', secret);    hmac.update(signatureInput);
    //base64 encode the hmac sha-356 result
    const signature= hmac.digest('base64'.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')    )
    // combine the base64 url encoded header,payload and signature to form the token
    const token = `${base64urlEncodedHeader}. ${base64urlEncodedpayload}.${signature};`

return token;}

module.exports = createToken;