const { origineMessage, zk, commandeOptions } = require('/index');

const {repondre,ms,arg,texte}=commandeOptions;

if (texte === 'salut' && origineMessage === '22651463203@s.whatsapp.net')
{ repondre('salut') 
};
