const { zokou } = require('../framework/zokou');
const { getData } = require('../bdd/MenuElysium');
const s = require("../set");

const dbUrl = s.DB;


/*zokou(
  {
    nomCom: 'menuelysium💠',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('1');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = ``;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/1cc788ca14b06a219af36.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
       // const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };
});
