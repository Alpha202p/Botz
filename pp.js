const qrcode = require('qrcode-terminal');
const puppeteer = require('puppeteer');
const { Client, LocalAuth, messageMedia } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
        puppeteer: { headless: false }, // Corrected puppeteer options placement
        });

        client.on('qr', qr => {
            qrcode.generate(qr, { small: true });
            });

            client.on('ready', () => {
                console.log('Client is ready!');
                });

                client.on('message', message => {
                    if (message.body == '.ping') {
                            message.reply('asu');
                                }
                                });

                                client.on('disconnected', (reason) => { // Removed extra space in event name
                                    console.log('disconnect whatsapp-bot', reason);
                                    });

                                    client.initialize();
                                    