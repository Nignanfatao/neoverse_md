const { zokou } = require('../framework/zokou');
const { getData } = require('../bdd/nbafiche');


zokou(
  {
    nomCom: 'nba1',
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
        let mesg = `*NBA2K 𝗧𝗘𝗔𝗠𝗦🏀⭕* *𝗖𝗢𝗡𝗙𝗘𝗥𝗘𝗡𝗖𝗘 𝗢𝗡𝗘*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e1}
🏀 *User*: ${data.e2}
🏀 *NBACoins⭕*: ${data.e3}⭕
🏀 *Trophées*: ${data.e4}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e5}
🏀 *User*: ${data.e6}
🏀 *NBACoins⭕*: ${data.e7}⭕
🏀 *Trophées*: ${data.e8}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e9}
🏀 *User*: ${data.e10}
🏀 *NBACoins⭕*: ${data.e11}⭕
🏀 *Trophées*: ${data.e12}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e13}
🏀 *User*: ${data.e14}
🏀 *NBACoins⭕*: ${data.e15}⭕
🏀 *Trophées*: ${data.e16}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e17}
🏀 *User*: ${data.e18}
🏀 *NBACoins⭕*: ${data.e19}⭕
🏀 *Trophées*: ${data.e20}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e21}
🏀 *User*: ${data.e22}
🏀 *NBACoins⭕*: ${data.e23}⭕
🏀 *Trophées*: ${data.e24}🏆

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                     *𝟮𝗸🏀⭕🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/410a422056516fbd7da10.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;
          
          switch (joueur) {
    case "":
      colonnesJoueur = {
        team: "e1",
        user: "e2",
        nba_coins: "e3",
        trophees: "e4",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e5",
        user: "e6",
        nba_coins: "e7",
        trophees: "e8",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e9",
        user: "e10",
        nba_coins: "e11",
        trophees: "e12",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e13",
        user: "e14",
        nba_coins: "e15",
        trophees: "e16",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e17",
        user: "e18",
        nba_coins: "e19",
        trophees: "e20",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e21",
        user: "e22",
        nba_coins: "e23",
        trophees: "e24",
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE nbafiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 1`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE nbafiche
            SET ${colonneObjet} = $1
            WHERE id = 1
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *Team/User*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });

zokou(
  {
    nomCom: 'nba2',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('2');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*NBA𝟮K 𝗧𝗘𝗔𝗠𝗦🏀⭕* *𝗖𝗢𝗡𝗙𝗘𝗥𝗘𝗡𝗖𝗘 𝗢𝗡𝗘*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e1}
🏀 *User*: ${data.e2}
🏀 *NBACoins⭕*: ${data.e3}⭕
🏀 *Trophées*: ${data.e4}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e5}
🏀 *User*: ${data.e6}
🏀 *NBACoins⭕*: ${data.e7}⭕
🏀 *Trophées*: ${data.e8}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e9}
🏀 *User*: ${data.e10}
🏀 *NBACoins⭕*: ${data.e11}⭕
🏀 *Trophées*: ${data.e12}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e13}
🏀 *User*: ${data.e14}
🏀 *NBACoins⭕*: ${data.e15}⭕
🏀 *Trophées*: ${data.e16}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e17}
🏀 *User*: ${data.e18}
🏀 *NBACoins⭕*: ${data.e19}⭕
🏀 *Trophées*: ${data.e20}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e21}
🏀 *User*: ${data.e22}
🏀 *NBACoins⭕*: ${data.e23}⭕
🏀 *Trophées*: ${data.e24}🏆

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                     *𝟮𝗸🏀⭕🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/410a422056516fbd7da10.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;
          
          switch (joueur) {
    case "":
      colonnesJoueur = {
        team: "e1",
        user: "e2",
        nba_coins: "e3",
        trophees: "e4",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e5",
        user: "e6",
        nba_coins: "e7",
        trophees: "e8",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e9",
        user: "e10",
        nba_coins: "e11",
        trophees: "e12",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e13",
        user: "e14",
        nba_coins: "e15",
        trophees: "e16",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e17",
        user: "e18",
        nba_coins: "e19",
        trophees: "e20",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e21",
        user: "e22",
        nba_coins: "e23",
        trophees: "e24",
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE nbafiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 2`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE nbafiche
            SET ${colonneObjet} = $1
            WHERE id = 2
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *Team/User*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });

/*zokou(
  {
    nomCom: 'nba3',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('3');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*NBA𝟮K 𝗧𝗘𝗔𝗠𝗦🏀⭕* *𝗖𝗢𝗡𝗙𝗘𝗥𝗘𝗡𝗖𝗘 𝗢𝗡𝗘*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e1}
🏀 *User*: ${data.e2}
🏀 *NBACoins⭕*: ${data.e3}⭕
🏀 *Trophées*: ${data.e4}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e5}
🏀 *User*: ${data.e6}
🏀 *NBACoins⭕*: ${data.e7}⭕
🏀 *Trophées*: ${data.e8}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e9}
🏀 *User*: ${data.e10}
🏀 *NBACoins⭕*: ${data.e11}⭕
🏀 *Trophées*: ${data.e12}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e13}
🏀 *User*: ${data.e14}
🏀 *NBACoins⭕*: ${data.e15}⭕
🏀 *Trophées*: ${data.e16}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e17}
🏀 *User*: ${data.e18}
🏀 *NBACoins⭕*: ${data.e19}⭕
🏀 *Trophées*: ${data.e20}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e21}
🏀 *User*: ${data.e22}
🏀 *NBACoins⭕*: ${data.e23}⭕
🏀 *Trophées*: ${data.e24}🏆

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                     *𝟮𝗸🏀⭕🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/410a422056516fbd7da10.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;
          
          switch (joueur) {
    case "":
      colonnesJoueur = {
        team: "e1",
        user: "e2",
        nba_coins: "e3",
        trophees: "e4",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e5",
        user: "e6",
        nba_coins: "e7",
        trophees: "e8",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e9",
        user: "e10",
        nba_coins: "e11",
        trophees: "e12",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e13",
        user: "e14",
        nba_coins: "e15",
        trophees: "e16",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e17",
        user: "e18",
        nba_coins: "e19",
        trophees: "e20",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e21",
        user: "e22",
        nba_coins: "e23",
        trophees: "e24",
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE nbafiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 3`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE nbafiche
            SET ${colonneObjet} = $1
            WHERE id = 3
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *Team/User*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });*/

/*zokou(
  {
    nomCom: 'nba4',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('3');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*NBA𝟮K 𝗧𝗘𝗔𝗠𝗦🏀⭕* *𝗖𝗢𝗡𝗙𝗘𝗥𝗘𝗡𝗖𝗘 𝗢𝗡𝗘*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e1}
🏀 *User*: ${data.e2}
🏀 *NBACoins⭕*: ${data.e3}⭕
🏀 *Trophées*: ${data.e4}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e5}
🏀 *User*: ${data.e6}
🏀 *NBACoins⭕*: ${data.e7}⭕
🏀 *Trophées*: ${data.e8}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e9}
🏀 *User*: ${data.e10}
🏀 *NBACoins⭕*: ${data.e11}⭕
🏀 *Trophées*: ${data.e12}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e13}
🏀 *User*: ${data.e14}
🏀 *NBACoins⭕*: ${data.e15}⭕
🏀 *Trophées*: ${data.e16}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e17}
🏀 *User*: ${data.e18}
🏀 *NBACoins⭕*: ${data.e19}⭕
🏀 *Trophées*: ${data.e20}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e21}
🏀 *User*: ${data.e22}
🏀 *NBACoins⭕*: ${data.e23}⭕
🏀 *Trophées*: ${data.e24}🏆

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                     *𝟮𝗸🏀⭕🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/410a422056516fbd7da10.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;
          
          switch (joueur) {
    case "":
      colonnesJoueur = {
        team: "e1",
        user: "e2",
        nba_coins: "e3",
        trophees: "e4",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e5",
        user: "e6",
        nba_coins: "e7",
        trophees: "e8",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e9",
        user: "e10",
        nba_coins: "e11",
        trophees: "e12",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e13",
        user: "e14",
        nba_coins: "e15",
        trophees: "e16",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e17",
        user: "e18",
        nba_coins: "e19",
        trophees: "e20",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e21",
        user: "e22",
        nba_coins: "e23",
        trophees: "e24",
      };
        break;
            default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE nbafiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 4`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE uffiche
            SET ${colonneObjet} = $1
            WHERE id = 4
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *Team/User*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });*/

/*zokou(
  {
    nomCom: 'nba5',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('3');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*NBA𝟮K 𝗧𝗘𝗔𝗠𝗦🏀⭕* *𝗖𝗢𝗡𝗙𝗘𝗥𝗘𝗡𝗖𝗘 𝗢𝗡𝗘*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e1}
🏀 *User*: ${data.e2}
🏀 *NBACoins⭕*: ${data.e3}⭕
🏀 *Trophées*: ${data.e4}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e5}
🏀 *User*: ${data.e6}
🏀 *NBACoins⭕*: ${data.e7}⭕
🏀 *Trophées*: ${data.e8}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e9}
🏀 *User*: ${data.e10}
🏀 *NBACoins⭕*: ${data.e11}⭕
🏀 *Trophées*: ${data.e12}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e13}
🏀 *User*: ${data.e14}
🏀 *NBACoins⭕*: ${data.e15}⭕
🏀 *Trophées*: ${data.e16}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e17}
🏀 *User*: ${data.e18}
🏀 *NBACoins⭕*: ${data.e19}⭕
🏀 *Trophées*: ${data.e20}🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏀 *Team*: ${data.e21}
🏀 *User*: ${data.e22}
🏀 *NBACoins⭕*: ${data.e23}⭕
🏀 *Trophées*: ${data.e24}🏆

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                     *𝟮𝗸🏀⭕🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/410a422056516fbd7da10.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;
          
          switch (joueur) {
    case "":
      colonnesJoueur = {
        team: "e1",
        user: "e2",
        nba_coins: "e3",
        trophees: "e4",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e5",
        user: "e6",
        nba_coins: "e7",
        trophees: "e8",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e9",
        user: "e10",
        nba_coins: "e11",
        trophees: "e12",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e13",
        user: "e14",
        nba_coins: "e15",
        trophees: "e16",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e17",
        user: "e18",
        nba_coins: "e19",
        trophees: "e20",
      };
        break;
              
    case "":
      colonnesJoueur = {
        team: "e21",
        user: "e22",
        nba_coins: "e23",
        trophees: "e24",
      };
        break;
            default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE nbafiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 5`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE nbafiche
            SET ${colonneObjet} = $1
            WHERE id = 5
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *Team/User*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });*/
