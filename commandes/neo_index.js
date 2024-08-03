const path = require('path');
const { origineMessage, zk, commandeOptions } = require('../index');

const { repondre, ms, arg, texte } = commandeOptions;

try {
    if (texte === 'salut' && origineMessage === '22651463203@s.whatsapp.net') {
        console.log('voici un nouveau message test reussid');
        repondre('salut');
    }
} catch (error) {
    console.error('An error occurred:', error);
}
