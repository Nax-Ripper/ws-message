
const { Client } = require('whatsapp-web.js');
const QRCode = require('qrcode');


const client = new Client();


client.initialize();

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);

    QRCode.toFile("test.png", qr, function (err) { // can change test.png to xxx.png
        if (err != null) {
            console.log(err)
        }


    })
});

client.on('ready', () => {
    console.log('Client is ready!');

    const number = ['601345675125', '60125889547866', '60125589556']; // add international number without +6xxxxxxxxxx
    const message = 'Hello! This is an automated test message.'; // add your msg here


    number.forEach((number) => {
        const chatId = number + '@c.us';
        client.sendMessage(chatId, message,).then(response => {
            console.log(message + ' to ' + number);
            console.log(chatId);

        }).catch(err => {
            console.error('Failed to send message: ', err);
        });
    })

});


