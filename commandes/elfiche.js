const { zokou } = require('../framework/zokou');
const { getData } = require('../bdd/elfiche');
zokou(
  {
    nomCom: 'fa1',
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
        let mesg = `*♻️Serveur FALLEN ANGELES🌃*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: TEMPEST 🥉
⏧⎔ *👤User*: Grimm Tempest
⏧⎔ *🌐Cyber capacité*: ${data.e1}
⏧⎔ *💠Ξcoins*: ${data.e2}💠Ξ
⏧⎔ *🌟SP*: ${data.e3}
⏧⎔ *🌍PC Exploration*: ${data.e4}
⏧⎔ *⚙️PC Crafting*: ${data.e5}
⏧⎔ *👊🏼PC Combat*: ${data.e6}
⏧⎔ *🛞PC Conduite*: ${data.e7}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: Dave G Storm 🥉
⏧⎔ *👤User*: Goldy Shogun
⏧⎔ *🌐Cyber capacité*: ${data.e8}
⏧⎔ *💠Ξcoins*: ${data.e9}💠Ξ
⏧⎔ *🌟SP*: ${data.e10}
⏧⎔ *🌍PC Exploration*: ${data.e11}
⏧⎔ *⚙️PC Crafting*: ${data.e12}
⏧⎔ *👊🏼PC Combat*: ${data.e13}
⏧⎔ *🛞PC Conduite*: ${data.e14}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: Fear the Death 🥉
⏧⎔ *👤User*: Atsushi KÏNGS
⏧⎔ *🌐Cyber capacité*: ${data.e15}
⏧⎔ *💠Ξcoins*: ${data.e16}💠Ξ
⏧⎔ *🌟SP*: ${data.e17}
⏧⎔ *🌍PC Exploration*: ${data.e18}
⏧⎔ *⚙️PC Crafting*: ${data.e19}
⏧⎔ *👊🏼PC Combat*: ${data.e20}
⏧⎔ *🛞PC Conduite*: ${data.e21}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: Fearless Queen 🥉
⏧⎔ *👤User*: Lily KÏNGS
⏧⎔ *🌐Cyber capacité*: ${data.e22}
⏧⎔ *💠Ξcoins*: ${data.e23}💠Ξ
⏧⎔ *🌟SP*: ${data.e24}
⏧⎔ *🌍PC Exploration*: ${data.e25}
⏧⎔ *⚙️PC Crafting*: ${data.e26}
⏧⎔ *👊🏼PC Combat*: ${data.e27}
⏧⎔ *🛞PC Conduite*: ${data.e28}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: Jonh Ainz 🥉
⏧⎔ *👤User*: Ainz KÏNGS
⏧⎔ *🌐Cyber capacité*: ${data.e29}
⏧⎔ *💠Ξcoins*: ${data.e30}💠Ξ
⏧⎔ *🌟SP*: ${data.e31}
⏧⎔ *🌍PC Exploration*: ${data.e32}
⏧⎔ *⚙️PC Crafting*: ${data.e33}
⏧⎔ *👊🏼PC Combat*: ${data.e34}
⏧⎔ *🛞PC Conduite*: ${data.e35}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                       💠ΞLYSIUM2162`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/00462de04c51991d9550a.jpg' }, caption: mesg }, { quoted: ms });
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
    case "Tempest":
      colonnesJoueur = {
        capacite: "e1",
        ecoins: "e2",
        sp: "e3",
        pc_Exploration: "e4",
        pc_crafting: "e5",
        pc_combat: "e6",
        pc_conduite: "e7",
      };
        break;
              
      case "Goldy":
      colonnesJoueur = {
        capacite: "e8",
        ecoins: "e9",
        sp: "e10",
        pc_Exploration: "e11",
        pc_crafting: "e12",
        pc_combat: "e13",
        pc_conduite: "e14",
      };
        break;  

      case "Atsushi":
      colonnesJoueur = {
        capacite: "e15",
        ecoins: "e16",
        sp: "e17",
        pc_Exploration: "e18",
        pc_crafting: "e19",
        pc_combat: "e20",
        pc_conduite: "e21",
      };
        break; 

       case "Lily":
      colonnesJoueur = {
        capacite: "e22",
        ecoins: "e23",
        sp: "e24",
        pc_Exploration: "e25",
        pc_crafting: "e26",
        pc_combat: "e27",
        pc_conduite: "e28",
      };
        break;      

     case "Ainz":
      colonnesJoueur = {
        capacite: "e29",
        ecoins: "e30",
        sp: "e31",
        pc_Exploration: "e32",
        pc_crafting: "e33",
        pc_combat: "e34",
        pc_conduite: "e35",
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
            const query = `UPDATE elfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 1`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE elfiche
            SET ${colonneObjet} = $1
            WHERE id = 1
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE Capacité*: ${texte}`);
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
    nomCom: 'fa2',
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
        let mesg = `*♻️Serveur FALLEN ANGELES🌃*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e1}
⏧⎔ *💠Ξcoins*: ${data.e2}💠Ξ
⏧⎔ *🌟SP*: ${data.e3}
⏧⎔ *🌍PC Exploration*: ${data.e4}
⏧⎔ *⚙️PC Crafting*: ${data.e5}
⏧⎔ *👊🏼PC Combat*: ${data.e6}
⏧⎔ *🛞PC Conduite*: ${data.e7}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e8}
⏧⎔ *💠Ξcoins*: ${data.e9}💠Ξ
⏧⎔ *🌟SP*: ${data.e10}
⏧⎔ *🌍PC Exploration*: ${data.e11}
⏧⎔ *⚙️PC Crafting*: ${data.e12}
⏧⎔ *👊🏼PC Combat*: ${data.e13}
⏧⎔ *🛞PC Conduite*: ${data.e14}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e15}
⏧⎔ *💠Ξcoins*: ${data.e16}💠Ξ
⏧⎔ *🌟SP*: ${data.e17}
⏧⎔ *🌍PC Exploration*: ${data.e18}
⏧⎔ *⚙️PC Crafting*: ${data.e19}
⏧⎔ *👊🏼PC Combat*: ${data.e20}
⏧⎔ *🛞PC Conduite*: ${data.e21}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*: 
⏧⎔ *🌐Cyber capacité*: ${data.e22}
⏧⎔ *💠Ξcoins*: ${data.e23}💠Ξ
⏧⎔ *🌟SP*: ${data.e24}
⏧⎔ *🌍PC Exploration*: ${data.e25}
⏧⎔ *⚙️PC Crafting*: ${data.e26}
⏧⎔ *👊🏼PC Combat*: ${data.e27}
⏧⎔ *🛞PC Conduite*: ${data.e28}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e29}
⏧⎔ *💠Ξcoins*: ${data.e30}💠Ξ
⏧⎔ *🌟SP*: ${data.e31}
⏧⎔ *🌍PC Exploration*: ${data.e32}
⏧⎔ *⚙️PC Crafting*: ${data.e33}
⏧⎔ *👊🏼PC Combat*: ${data.e34}
⏧⎔ *🛞PC Conduite*: ${data.e35}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                       💠ΞLYSIUM2162`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/00462de04c51991d9550a.jpg' }, caption: mesg }, { quoted: ms });
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
        capacite: "e1",
        ecoins: "e2",
        sp: "e3",
        pc_Exploration: "e4",
        pc_crafting: "e5",
        pc_combat: "e6",
        pc_conduite: "e7",
      };
        break;
              
      case "":
      colonnesJoueur = {
        capacite: "e8",
        ecoins: "e9",
        sp: "e10",
        pc_Exploration: "e11",
        pc_crafting: "e12",
        pc_combat: "e13",
        pc_conduite: "e14",
      };
        break;  

      case "":
      colonnesJoueur = {
        capacite: "e15",
        ecoins: "e16",
        sp: "e17",
        pc_Exploration: "e18",
        pc_crafting: "e19",
        pc_combat: "e20",
        pc_conduite: "e21",
      };
        break; 

       case "":
      colonnesJoueur = {
        capacite: "e22",
        ecoins: "e23",
        sp: "e24",
        pc_Exploration: "e25",
        pc_crafting: "e26",
        pc_combat: "e27",
        pc_conduite: "e28",
      };
        break;      

     case "":
      colonnesJoueur = {
        capacite: "e29",
        ecoins: "e30",
        sp: "e31",
        pc_Exploration: "e32",
        pc_crafting: "e33",
        pc_combat: "e34",
        pc_conduite: "e35",
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
            const query = `UPDATE elfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 2`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE elfiche
            SET ${colonneObjet} = $1
            WHERE id = 2
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE Capacité*: ${texte}`);
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
    nomCom: 'fa3',
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
        let mesg = `*♻️Serveur FALLEN ANGELES🌃*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e1}
⏧⎔ *💠Ξcoins*: ${data.e2}💠Ξ
⏧⎔ *🌟SP*: ${data.e3}
⏧⎔ *🌍PC Exploration*: ${data.e4}
⏧⎔ *⚙️PC Crafting*: ${data.e5}
⏧⎔ *👊🏼PC Combat*: ${data.e6}
⏧⎔ *🛞PC Conduite*: ${data.e7}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e8}
⏧⎔ *💠Ξcoins*: ${data.e9}💠Ξ
⏧⎔ *🌟SP*: ${data.e10}
⏧⎔ *🌍PC Exploration*: ${data.e11}
⏧⎔ *⚙️PC Crafting*: ${data.e12}
⏧⎔ *👊🏼PC Combat*: ${data.e13}
⏧⎔ *🛞PC Conduite*: ${data.e14}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e15}
⏧⎔ *💠Ξcoins*: ${data.e16}💠Ξ
⏧⎔ *🌟SP*: ${data.e17}
⏧⎔ *🌍PC Exploration*: ${data.e18}
⏧⎔ *⚙️PC Crafting*: ${data.e19}
⏧⎔ *👊🏼PC Combat*: ${data.e20}
⏧⎔ *🛞PC Conduite*: ${data.e21}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*: 
⏧⎔ *🌐Cyber capacité*: ${data.e22}
⏧⎔ *💠Ξcoins*: ${data.e23}💠Ξ
⏧⎔ *🌟SP*: ${data.e24}
⏧⎔ *🌍PC Exploration*: ${data.e25}
⏧⎔ *⚙️PC Crafting*: ${data.e26}
⏧⎔ *👊🏼PC Combat*: ${data.e27}
⏧⎔ *🛞PC Conduite*: ${data.e28}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e29}
⏧⎔ *💠Ξcoins*: ${data.e30}💠Ξ
⏧⎔ *🌟SP*: ${data.e31}
⏧⎔ *🌍PC Exploration*: ${data.e32}
⏧⎔ *⚙️PC Crafting*: ${data.e33}
⏧⎔ *👊🏼PC Combat*: ${data.e34}
⏧⎔ *🛞PC Conduite*: ${data.e35}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                       💠ΞLYSIUM2162`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/00462de04c51991d9550a.jpg' }, caption: mesg }, { quoted: ms });
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
        capacite: "e1",
        ecoins: "e2",
        sp: "e3",
        pc_Exploration: "e4",
        pc_crafting: "e5",
        pc_combat: "e6",
        pc_conduite: "e7",
      };
        break;
              
      case "":
      colonnesJoueur = {
        capacite: "e8",
        ecoins: "e9",
        sp: "e10",
        pc_Exploration: "e11",
        pc_crafting: "e12",
        pc_combat: "e13",
        pc_conduite: "e14",
      };
        break;  

      case "":
      colonnesJoueur = {
        capacite: "e15",
        ecoins: "e16",
        sp: "e17",
        pc_Exploration: "e18",
        pc_crafting: "e19",
        pc_combat: "e20",
        pc_conduite: "e21",
      };
        break; 

       case "":
      colonnesJoueur = {
        capacite: "e22",
        ecoins: "e23",
        sp: "e24",
        pc_Exploration: "e25",
        pc_crafting: "e26",
        pc_combat: "e27",
        pc_conduite: "e28",
      };
        break;      

     case "":
      colonnesJoueur = {
        capacite: "e29",
        ecoins: "e30",
        sp: "e31",
        pc_Exploration: "e32",
        pc_crafting: "e33",
        pc_combat: "e34",
        pc_conduite: "e35",
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
            const query = `UPDATE elfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 3`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE elfiche
            SET ${colonneObjet} = $1
            WHERE id = 3
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE Capacité*: ${texte}`);
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

zokou(
  {
    nomCom: 'dt1',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('4');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*♻️Serveur DOWNTOWN🌃*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: Killer Cg 🥉
⏧⎔ *👤User*: Ghost Killer
⏧⎔ *🌐Cyber capacité*: ${data.e1}
⏧⎔ *💠Ξcoins*: ${data.e2}💠Ξ
⏧⎔ *🌟SP*: ${data.e3}
⏧⎔ *🌍PC Exploration*: ${data.e4}
⏧⎔ *⚙️PC Crafting*: ${data.e5}
⏧⎔ *👊🏼PC Combat*: ${data.e6}
⏧⎔ *🛞PC Conduite*: ${data.e7}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: Death Minder🥉
⏧⎔ *👤User*: Damian KÏNGS
⏧⎔ *🌐Cyber capacité*: ${data.e8}
⏧⎔ *💠Ξcoins*: ${data.e9}💠Ξ
⏧⎔ *🌟SP*: ${data.e10}
⏧⎔ *🌍PC Exploration*: ${data.e11}
⏧⎔ *⚙️PC Crafting*: ${data.e12}
⏧⎔ *👊🏼PC Combat*: ${data.e13}
⏧⎔ *🛞PC Conduite*: ${data.e14}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: Black Mamba 🥉
⏧⎔ *👤User*: Vanitas Golds KÏNGS
⏧⎔ *🌐Cyber capacité*: ${data.e15}
⏧⎔ *💠Ξcoins*: ${data.e16}💠Ξ
⏧⎔ *🌟SP*: ${data.e17}
⏧⎔ *🌍PC Exploration*: ${data.e18}
⏧⎔ *⚙️PC Crafting*: ${data.e19}
⏧⎔ *👊🏼PC Combat*: ${data.e20}
⏧⎔ *🛞PC Conduite*: ${data.e21}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: Karosu 🥉
⏧⎔ *👤User*: Kemael
⏧⎔ *🌐Cyber capacité*: ${data.e22}
⏧⎔ *💠Ξcoins*: ${data.e23}💠Ξ
⏧⎔ *🌟SP*: ${data.e24}
⏧⎔ *🌍PC Exploration*: ${data.e25}
⏧⎔ *⚙️PC Crafting*: ${data.e26}
⏧⎔ *👊🏼PC Combat*: ${data.e27}
⏧⎔ *🛞PC Conduite*: ${data.e28}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: Black Shadow 🥉
⏧⎔ *👤User*: White KÏNGS
⏧⎔ *🌐Cyber capacité*: ${data.e29}
⏧⎔ *💠Ξcoins*: ${data.e30}💠Ξ
⏧⎔ *🌟SP*: ${data.e31}
⏧⎔ *🌍PC Exploration*: ${data.e32}
⏧⎔ *⚙️PC Crafting*: ${data.e33}
⏧⎔ *👊🏼PC Combat*: ${data.e34}
⏧⎔ *🛞PC Conduite*: ${data.e35}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                       💠ΞLYSIUM2162`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/a523d9c72ed2bc043bead.jpg' }, caption: mesg }, { quoted: ms });
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
    case "Killer":
      colonnesJoueur = {
        capacite: "e1",
        ecoins: "e2",
        sp: "e3",
        pc_Exploration: "e4",
        pc_crafting: "e5",
        pc_combat: "e6",
        pc_conduite: "e7",
      };
        break;
              
      case "Damian":
      colonnesJoueur = {
        capacite: "e8",
        ecoins: "e9",
        sp: "e10",
        pc_Exploration: "e11",
        pc_crafting: "e12",
        pc_combat: "e13",
        pc_conduite: "e14",
      };
        break;  

      case "Vanitas":
      colonnesJoueur = {
        capacite: "e15",
        ecoins: "e16",
        sp: "e17",
        pc_Exploration: "e18",
        pc_crafting: "e19",
        pc_combat: "e20",
        pc_conduite: "e21",
      };
        break; 

       case "Kemael":
      colonnesJoueur = {
        capacite: "e22",
        ecoins: "e23",
        sp: "e24",
        pc_Exploration: "e25",
        pc_crafting: "e26",
        pc_combat: "e27",
        pc_conduite: "e28",
      };
        break;      

     case "White":
      colonnesJoueur = {
        capacite: "e29",
        ecoins: "e30",
        sp: "e31",
        pc_Exploration: "e32",
        pc_crafting: "e33",
        pc_combat: "e34",
        pc_conduite: "e35",
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
            const query = `UPDATE elfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 4`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE elfiche
            SET ${colonneObjet} = $1
            WHERE id = 4
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE Capacité*: ${texte}`);
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
    nomCom: 'dt2',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('5');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*♻️Serveur DOWNTOWN🌃*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e1}
⏧⎔ *💠Ξcoins*: ${data.e2}💠Ξ
⏧⎔ *🌟SP*: ${data.e3}
⏧⎔ *🌍PC Exploration*: ${data.e4}
⏧⎔ *⚙️PC Crafting*: ${data.e5}
⏧⎔ *👊🏼PC Combat*: ${data.e6}
⏧⎔ *🛞PC Conduite*: ${data.e7}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e8}
⏧⎔ *💠Ξcoins*: ${data.e9}💠Ξ
⏧⎔ *🌟SP*: ${data.e10}
⏧⎔ *🌍PC Exploration*: ${data.e11}
⏧⎔ *⚙️PC Crafting*: ${data.e12}
⏧⎔ *👊🏼PC Combat*: ${data.e13}
⏧⎔ *🛞PC Conduite*: ${data.e14}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e15}
⏧⎔ *💠Ξcoins*: ${data.e16}💠Ξ
⏧⎔ *🌟SP*: ${data.e17}
⏧⎔ *🌍PC Exploration*: ${data.e18}
⏧⎔ *⚙️PC Crafting*: ${data.e19}
⏧⎔ *👊🏼PC Combat*: ${data.e20}
⏧⎔ *🛞PC Conduite*: ${data.e21}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*: 
⏧⎔ *🌐Cyber capacité*: ${data.e22}
⏧⎔ *💠Ξcoins*: ${data.e23}💠Ξ
⏧⎔ *🌟SP*: ${data.e24}
⏧⎔ *🌍PC Exploration*: ${data.e25}
⏧⎔ *⚙️PC Crafting*: ${data.e26}
⏧⎔ *👊🏼PC Combat*: ${data.e27}
⏧⎔ *🛞PC Conduite*: ${data.e28}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e29}
⏧⎔ *💠Ξcoins*: ${data.e30}💠Ξ
⏧⎔ *🌟SP*: ${data.e31}
⏧⎔ *🌍PC Exploration*: ${data.e32}
⏧⎔ *⚙️PC Crafting*: ${data.e33}
⏧⎔ *👊🏼PC Combat*: ${data.e34}
⏧⎔ *🛞PC Conduite*: ${data.e35}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                       💠ΞLYSIUM2162`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/a523d9c72ed2bc043bead.jpg' }, caption: mesg }, { quoted: ms });
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
        capacite: "e1",
        ecoins: "e2",
        sp: "e3",
        pc_Exploration: "e4",
        pc_crafting: "e5",
        pc_combat: "e6",
        pc_conduite: "e7",
      };
        break;
              
      case "":
      colonnesJoueur = {
        capacite: "e8",
        ecoins: "e9",
        sp: "e10",
        pc_Exploration: "e11",
        pc_crafting: "e12",
        pc_combat: "e13",
        pc_conduite: "e14",
      };
        break;  

      case "":
      colonnesJoueur = {
        capacite: "e15",
        ecoins: "e16",
        sp: "e17",
        pc_Exploration: "e18",
        pc_crafting: "e19",
        pc_combat: "e20",
        pc_conduite: "e21",
      };
        break; 

       case "":
      colonnesJoueur = {
        capacite: "e22",
        ecoins: "e23",
        sp: "e24",
        pc_Exploration: "e25",
        pc_crafting: "e26",
        pc_combat: "e27",
        pc_conduite: "e28",
      };
        break;      

     case "":
      colonnesJoueur = {
        capacite: "e29",
        ecoins: "e30",
        sp: "e31",
        pc_Exploration: "e32",
        pc_crafting: "e33",
        pc_combat: "e34",
        pc_conduite: "e35",
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
            const query = `UPDATE elfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 5`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE elfiche
            SET ${colonneObjet} = $1
            WHERE id = 5
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE Capacité*: ${texte}`);
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
    nomCom: 'dt3',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('6');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*♻️Serveur DOWNTOWN🌃*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e1}
⏧⎔ *💠Ξcoins*: ${data.e2}💠Ξ
⏧⎔ *🌟SP*: ${data.e3}
⏧⎔ *🌍PC Exploration*: ${data.e4}
⏧⎔ *⚙️PC Crafting*: ${data.e5}
⏧⎔ *👊🏼PC Combat*: ${data.e6}
⏧⎔ *🛞PC Conduite*: ${data.e7}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e8}
⏧⎔ *💠Ξcoins*: ${data.e9}💠Ξ
⏧⎔ *🌟SP*: ${data.e10}
⏧⎔ *🌍PC Exploration*: ${data.e11}
⏧⎔ *⚙️PC Crafting*: ${data.e12}
⏧⎔ *👊🏼PC Combat*: ${data.e13}
⏧⎔ *🛞PC Conduite*: ${data.e14}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e15}
⏧⎔ *💠Ξcoins*: ${data.e16}💠Ξ
⏧⎔ *🌟SP*: ${data.e17}
⏧⎔ *🌍PC Exploration*: ${data.e18}
⏧⎔ *⚙️PC Crafting*: ${data.e19}
⏧⎔ *👊🏼PC Combat*: ${data.e20}
⏧⎔ *🛞PC Conduite*: ${data.e21}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*: 
⏧⎔ *🌐Cyber capacité*: ${data.e22}
⏧⎔ *💠Ξcoins*: ${data.e23}💠Ξ
⏧⎔ *🌟SP*: ${data.e24}
⏧⎔ *🌍PC Exploration*: ${data.e25}
⏧⎔ *⚙️PC Crafting*: ${data.e26}
⏧⎔ *👊🏼PC Combat*: ${data.e27}
⏧⎔ *🛞PC Conduite*: ${data.e28}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e29}
⏧⎔ *💠Ξcoins*: ${data.e30}💠Ξ
⏧⎔ *🌟SP*: ${data.e31}
⏧⎔ *🌍PC Exploration*: ${data.e32}
⏧⎔ *⚙️PC Crafting*: ${data.e33}
⏧⎔ *👊🏼PC Combat*: ${data.e34}
⏧⎔ *🛞PC Conduite*: ${data.e35}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                       💠ΞLYSIUM2162`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/a523d9c72ed2bc043bead.jpg' }, caption: mesg }, { quoted: ms });
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
        capacite: "e1",
        ecoins: "e2",
        sp: "e3",
        pc_Exploration: "e4",
        pc_crafting: "e5",
        pc_combat: "e6",
        pc_conduite: "e7",
      };
        break;
              
      case "":
      colonnesJoueur = {
        capacite: "e8",
        ecoins: "e9",
        sp: "e10",
        pc_Exploration: "e11",
        pc_crafting: "e12",
        pc_combat: "e13",
        pc_conduite: "e14",
      };
        break;  

      case "":
      colonnesJoueur = {
        capacite: "e15",
        ecoins: "e16",
        sp: "e17",
        pc_Exploration: "e18",
        pc_crafting: "e19",
        pc_combat: "e20",
        pc_conduite: "e21",
      };
        break; 

       case "":
      colonnesJoueur = {
        capacite: "e22",
        ecoins: "e23",
        sp: "e24",
        pc_Exploration: "e25",
        pc_crafting: "e26",
        pc_combat: "e27",
        pc_conduite: "e28",
      };
        break;      

     case "":
      colonnesJoueur = {
        capacite: "e29",
        ecoins: "e30",
        sp: "e31",
        pc_Exploration: "e32",
        pc_crafting: "e33",
        pc_combat: "e34",
        pc_conduite: "e35",
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
            const query = `UPDATE elfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 6`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE elfiche
            SET ${colonneObjet} = $1
            WHERE id = 6
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE Capacité*: ${texte}`);
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

zokou(
  {
    nomCom: 'zt1',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('7');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*♻️Serveur Z-TOWN🌃*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:BAXCONE Jones 🥉
⏧⎔ *👤User*: Covid Sama
⏧⎔ *🌐Cyber capacité*: ${data.e1}
⏧⎔ *💠Ξcoins*: ${data.e2}💠Ξ
⏧⎔ *🌟SP*: ${data.e3}
⏧⎔ *🌍PC Exploration*: ${data.e4}
⏧⎔ *⚙️PC Crafting*: ${data.e5}
⏧⎔ *👊🏼PC Combat*: ${data.e6}
⏧⎔ *🛞PC Conduite*: ${data.e7}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: Scarlet King 🥉
⏧⎔ *👤User*: Solo A. KÏNGS
⏧⎔ *🌐Cyber capacité*: ${data.e8}
⏧⎔ *💠Ξcoins*: ${data.e9}💠Ξ
⏧⎔ *🌟SP*: ${data.e10}
⏧⎔ *🌍PC Exploration*: ${data.e11}
⏧⎔ *⚙️PC Crafting*: ${data.e12}
⏧⎔ *👊🏼PC Combat*: ${data.e13}
⏧⎔ *🛞PC Conduite*: ${data.e14}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e15}
⏧⎔ *💠Ξcoins*: ${data.e16}💠Ξ
⏧⎔ *🌟SP*: ${data.e17}
⏧⎔ *🌍PC Exploration*: ${data.e18}
⏧⎔ *⚙️PC Crafting*: ${data.e19}
⏧⎔ *👊🏼PC Combat*: ${data.e20}
⏧⎔ *🛞PC Conduite*: ${data.e21}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*: 
⏧⎔ *🌐Cyber capacité*: ${data.e22}
⏧⎔ *💠Ξcoins*: ${data.e23}💠Ξ
⏧⎔ *🌟SP*: ${data.e24}
⏧⎔ *🌍PC Exploration*: ${data.e25}
⏧⎔ *⚙️PC Crafting*: ${data.e26}
⏧⎔ *👊🏼PC Combat*: ${data.e27}
⏧⎔ *🛞PC Conduite*: ${data.e28}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e29}
⏧⎔ *💠Ξcoins*: ${data.e30}💠Ξ
⏧⎔ *🌟SP*: ${data.e31}
⏧⎔ *🌍PC Exploration*: ${data.e32}
⏧⎔ *⚙️PC Crafting*: ${data.e33}
⏧⎔ *👊🏼PC Combat*: ${data.e34}
⏧⎔ *🛞PC Conduite*: ${data.e35}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                       💠ΞLYSIUM2162`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/b485db069c314461ca53f.jpg' }, caption: mesg }, { quoted: ms });
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
    case "Covid":
      colonnesJoueur = {
        capacite: "e1",
        ecoins: "e2",
        sp: "e3",
        pc_Exploration: "e4",
        pc_crafting: "e5",
        pc_combat: "e6",
        pc_conduite: "e7",
      };
        break;
              
      case "SoloMoe":
      colonnesJoueur = {
        capacite: "e8",
        ecoins: "e9",
        sp: "e10",
        pc_Exploration: "e11",
        pc_crafting: "e12",
        pc_combat: "e13",
        pc_conduite: "e14",
      };
        break;  

      case "":
      colonnesJoueur = {
        capacite: "e15",
        ecoins: "e16",
        sp: "e17",
        pc_Exploration: "e18",
        pc_crafting: "e19",
        pc_combat: "e20",
        pc_conduite: "e21",
      };
        break; 

       case "":
      colonnesJoueur = {
        capacite: "e22",
        ecoins: "e23",
        sp: "e24",
        pc_Exploration: "e25",
        pc_crafting: "e26",
        pc_combat: "e27",
        pc_conduite: "e28",
      };
        break;      

     case "":
      colonnesJoueur = {
        capacite: "e29",
        ecoins: "e30",
        sp: "e31",
        pc_Exploration: "e32",
        pc_crafting: "e33",
        pc_combat: "e34",
        pc_conduite: "e35",
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
            const query = `UPDATE elfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 7`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE elfiche
            SET ${colonneObjet} = $1
            WHERE id = 7
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE Capacité*: ${texte}`);
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
    nomCom: 'zt2',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('8');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*♻️Serveur 🌃*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e1}
⏧⎔ *💠Ξcoins*: ${data.e2}💠Ξ
⏧⎔ *🌟SP*: ${data.e3}
⏧⎔ *🌍PC Exploration*: ${data.e4}
⏧⎔ *⚙️PC Crafting*: ${data.e5}
⏧⎔ *👊🏼PC Combat*: ${data.e6}
⏧⎔ *🛞PC Conduite*: ${data.e7}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e8}
⏧⎔ *💠Ξcoins*: ${data.e9}💠Ξ
⏧⎔ *🌟SP*: ${data.e10}
⏧⎔ *🌍PC Exploration*: ${data.e11}
⏧⎔ *⚙️PC Crafting*: ${data.e12}
⏧⎔ *👊🏼PC Combat*: ${data.e13}
⏧⎔ *🛞PC Conduite*: ${data.e14}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e15}
⏧⎔ *💠Ξcoins*: ${data.e16}💠Ξ
⏧⎔ *🌟SP*: ${data.e17}
⏧⎔ *🌍PC Exploration*: ${data.e18}
⏧⎔ *⚙️PC Crafting*: ${data.e19}
⏧⎔ *👊🏼PC Combat*: ${data.e20}
⏧⎔ *🛞PC Conduite*: ${data.e21}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*: 
⏧⎔ *🌐Cyber capacité*: ${data.e22}
⏧⎔ *💠Ξcoins*: ${data.e23}💠Ξ
⏧⎔ *🌟SP*: ${data.e24}
⏧⎔ *🌍PC Exploration*: ${data.e25}
⏧⎔ *⚙️PC Crafting*: ${data.e26}
⏧⎔ *👊🏼PC Combat*: ${data.e27}
⏧⎔ *🛞PC Conduite*: ${data.e28}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e29}
⏧⎔ *💠Ξcoins*: ${data.e30}💠Ξ
⏧⎔ *🌟SP*: ${data.e31}
⏧⎔ *🌍PC Exploration*: ${data.e32}
⏧⎔ *⚙️PC Crafting*: ${data.e33}
⏧⎔ *👊🏼PC Combat*: ${data.e34}
⏧⎔ *🛞PC Conduite*: ${data.e35}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                       💠ΞLYSIUM2162`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/b485db069c314461ca53f.jpg' }, caption: mesg }, { quoted: ms });
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
        capacite: "e1",
        ecoins: "e2",
        sp: "e3",
        pc_Exploration: "e4",
        pc_crafting: "e5",
        pc_combat: "e6",
        pc_conduite: "e7",
      };
        break;
              
      case "":
      colonnesJoueur = {
        capacite: "e8",
        ecoins: "e9",
        sp: "e10",
        pc_Exploration: "e11",
        pc_crafting: "e12",
        pc_combat: "e13",
        pc_conduite: "e14",
      };
        break;  

      case "":
      colonnesJoueur = {
        capacite: "e15",
        ecoins: "e16",
        sp: "e17",
        pc_Exploration: "e18",
        pc_crafting: "e19",
        pc_combat: "e20",
        pc_conduite: "e21",
      };
        break; 

       case "":
      colonnesJoueur = {
        capacite: "e22",
        ecoins: "e23",
        sp: "e24",
        pc_Exploration: "e25",
        pc_crafting: "e26",
        pc_combat: "e27",
        pc_conduite: "e28",
      };
        break;      

     case "":
      colonnesJoueur = {
        capacite: "e29",
        ecoins: "e30",
        sp: "e31",
        pc_Exploration: "e32",
        pc_crafting: "e33",
        pc_combat: "e34",
        pc_conduite: "e35",
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
            const query = `UPDATE elfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 8`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE elfiche
            SET ${colonneObjet} = $1
            WHERE id = 8
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE Capacité*: ${texte}`);
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
    nomCom: 'zt3',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('9');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*♻️Serveur 🌃*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e1}
⏧⎔ *💠Ξcoins*: ${data.e2}💠Ξ
⏧⎔ *🌟SP*: ${data.e3}
⏧⎔ *🌍PC Exploration*: ${data.e4}
⏧⎔ *⚙️PC Crafting*: ${data.e5}
⏧⎔ *👊🏼PC Combat*: ${data.e6}
⏧⎔ *🛞PC Conduite*: ${data.e7}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e8}
⏧⎔ *💠Ξcoins*: ${data.e9}💠Ξ
⏧⎔ *🌟SP*: ${data.e10}
⏧⎔ *🌍PC Exploration*: ${data.e11}
⏧⎔ *⚙️PC Crafting*: ${data.e12}
⏧⎔ *👊🏼PC Combat*: ${data.e13}
⏧⎔ *🛞PC Conduite*: ${data.e14}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e15}
⏧⎔ *💠Ξcoins*: ${data.e16}💠Ξ
⏧⎔ *🌟SP*: ${data.e17}
⏧⎔ *🌍PC Exploration*: ${data.e18}
⏧⎔ *⚙️PC Crafting*: ${data.e19}
⏧⎔ *👊🏼PC Combat*: ${data.e20}
⏧⎔ *🛞PC Conduite*: ${data.e21}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*: 
⏧⎔ *🌐Cyber capacité*: ${data.e22}
⏧⎔ *💠Ξcoins*: ${data.e23}💠Ξ
⏧⎔ *🌟SP*: ${data.e24}
⏧⎔ *🌍PC Exploration*: ${data.e25}
⏧⎔ *⚙️PC Crafting*: ${data.e26}
⏧⎔ *👊🏼PC Combat*: ${data.e27}
⏧⎔ *🛞PC Conduite*: ${data.e28}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e29}
⏧⎔ *💠Ξcoins*: ${data.e30}💠Ξ
⏧⎔ *🌟SP*: ${data.e31}
⏧⎔ *🌍PC Exploration*: ${data.e32}
⏧⎔ *⚙️PC Crafting*: ${data.e33}
⏧⎔ *👊🏼PC Combat*: ${data.e34}
⏧⎔ *🛞PC Conduite*: ${data.e35}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                       💠ΞLYSIUM2162`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/b485db069c314461ca53f.jpg' }, caption: mesg }, { quoted: ms });
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
        capacite: "e1",
        ecoins: "e2",
        sp: "e3",
        pc_Exploration: "e4",
        pc_crafting: "e5",
        pc_combat: "e6",
        pc_conduite: "e7",
      };
        break;
              
      case "":
      colonnesJoueur = {
        capacite: "e8",
        ecoins: "e9",
        sp: "e10",
        pc_Exploration: "e11",
        pc_crafting: "e12",
        pc_combat: "e13",
        pc_conduite: "e14",
      };
        break;  

      case "":
      colonnesJoueur = {
        capacite: "e15",
        ecoins: "e16",
        sp: "e17",
        pc_Exploration: "e18",
        pc_crafting: "e19",
        pc_combat: "e20",
        pc_conduite: "e21",
      };
        break; 

       case "":
      colonnesJoueur = {
        capacite: "e22",
        ecoins: "e23",
        sp: "e24",
        pc_Exploration: "e25",
        pc_crafting: "e26",
        pc_combat: "e27",
        pc_conduite: "e28",
      };
        break;      

     case "":
      colonnesJoueur = {
        capacite: "e29",
        ecoins: "e30",
        sp: "e31",
        pc_Exploration: "e32",
        pc_crafting: "e33",
        pc_combat: "e34",
        pc_conduite: "e35",
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
            const query = `UPDATE elfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 9`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE elfiche
            SET ${colonneObjet} = $1
            WHERE id = 9
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE Capacité*: ${texte}`);
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

zokou(
  {
    nomCom: 'nm1',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('10');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*♻️Serveur NOUVEAU MONDE🌃*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: Aether 🥉
⏧⎔ *👤User*: Aether Genesis
⏧⎔ *🌐Cyber capacité*: ${data.e1}
⏧⎔ *💠Ξcoins*: ${data.e2}💠Ξ
⏧⎔ *🌟SP*: ${data.e3}
⏧⎔ *🌍PC Exploration*: ${data.e4}
⏧⎔ *⚙️PC Crafting*: ${data.e5}
⏧⎔ *👊🏼PC Combat*: ${data.e6}
⏧⎔ *🛞PC Conduite*: ${data.e7}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: Swat 🥉
⏧⎔ *👤User*: Thanatos Gold King
⏧⎔ *🌐Cyber capacité*: ${data.e8}
⏧⎔ *💠Ξcoins*: ${data.e9}💠Ξ
⏧⎔ *🌟SP*: ${data.e10}
⏧⎔ *🌍PC Exploration*: ${data.e11}
⏧⎔ *⚙️PC Crafting*: ${data.e12}
⏧⎔ *👊🏼PC Combat*: ${data.e13}
⏧⎔ *🛞PC Conduite*: ${data.e14}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:Jones 🥉
⏧⎔ *👤User*: Abdiel
⏧⎔ *🌐Cyber capacité*: ${data.e15}
⏧⎔ *💠Ξcoins*: ${data.e16}💠Ξ
⏧⎔ *🌟SP*: ${data.e17}
⏧⎔ *🌍PC Exploration*: ${data.e18}
⏧⎔ *⚙️PC Crafting*: ${data.e19}
⏧⎔ *👊🏼PC Combat*: ${data.e20}
⏧⎔ *🛞PC Conduite*: ${data.e21}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: YÛ BLASQ 🥉
⏧⎔ *👤User*: Yû Blasq Astral
⏧⎔ *🌐Cyber capacité*: ${data.e22}
⏧⎔ *💠Ξcoins*: ${data.e23}💠Ξ
⏧⎔ *🌟SP*: ${data.e24}
⏧⎔ *🌍PC Exploration*: ${data.e25}
⏧⎔ *⚙️PC Crafting*: ${data.e26}
⏧⎔ *👊🏼PC Combat*: ${data.e27}
⏧⎔ *🛞PC Conduite*: ${data.e28}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e29}
⏧⎔ *💠Ξcoins*: ${data.e30}💠Ξ
⏧⎔ *🌟SP*: ${data.e31}
⏧⎔ *🌍PC Exploration*: ${data.e32}
⏧⎔ *⚙️PC Crafting*: ${data.e33}
⏧⎔ *👊🏼PC Combat*: ${data.e34}
⏧⎔ *🛞PC Conduite*: ${data.e35}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                       💠ΞLYSIUM2162`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/3a817ee775dff1c0ad789.jpg' }, caption: mesg }, { quoted: ms });
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
    case "Aether":
      colonnesJoueur = {
        capacite: "e1",
        ecoins: "e2",
        sp: "e3",
        pc_Exploration: "e4",
        pc_crafting: "e5",
        pc_combat: "e6",
        pc_conduite: "e7",
      };
        break;
              
      case "Thanatos":
      colonnesJoueur = {
        capacite: "e8",
        ecoins: "e9",
        sp: "e10",
        pc_Exploration: "e11",
        pc_crafting: "e12",
        pc_combat: "e13",
        pc_conduite: "e14",
      };
        break;  

      case "Abdiel":
      colonnesJoueur = {
        capacite: "e15",
        ecoins: "e16",
        sp: "e17",
        pc_Exploration: "e18",
        pc_crafting: "e19",
        pc_combat: "e20",
        pc_conduite: "e21",
      };
        break; 

       case "Yû":
      colonnesJoueur = {
        capacite: "e22",
        ecoins: "e23",
        sp: "e24",
        pc_Exploration: "e25",
        pc_crafting: "e26",
        pc_combat: "e27",
        pc_conduite: "e28",
      };
        break;      

     case "":
      colonnesJoueur = {
        capacite: "e29",
        ecoins: "e30",
        sp: "e31",
        pc_Exploration: "e32",
        pc_crafting: "e33",
        pc_combat: "e34",
        pc_conduite: "e35",
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
            const query = `UPDATE elfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 10`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE elfiche
            SET ${colonneObjet} = $1
            WHERE id = 10
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE Capacité*: ${texte}`);
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
    nomCom: 'nm2',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('11');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*♻️Serveur 🌃*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e1}
⏧⎔ *💠Ξcoins*: ${data.e2}💠Ξ
⏧⎔ *🌟SP*: ${data.e3}
⏧⎔ *🌍PC Exploration*: ${data.e4}
⏧⎔ *⚙️PC Crafting*: ${data.e5}
⏧⎔ *👊🏼PC Combat*: ${data.e6}
⏧⎔ *🛞PC Conduite*: ${data.e7}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e8}
⏧⎔ *💠Ξcoins*: ${data.e9}💠Ξ
⏧⎔ *🌟SP*: ${data.e10}
⏧⎔ *🌍PC Exploration*: ${data.e11}
⏧⎔ *⚙️PC Crafting*: ${data.e12}
⏧⎔ *👊🏼PC Combat*: ${data.e13}
⏧⎔ *🛞PC Conduite*: ${data.e14}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e15}
⏧⎔ *💠Ξcoins*: ${data.e16}💠Ξ
⏧⎔ *🌟SP*: ${data.e17}
⏧⎔ *🌍PC Exploration*: ${data.e18}
⏧⎔ *⚙️PC Crafting*: ${data.e19}
⏧⎔ *👊🏼PC Combat*: ${data.e20}
⏧⎔ *🛞PC Conduite*: ${data.e21}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*: 
⏧⎔ *🌐Cyber capacité*: ${data.e22}
⏧⎔ *💠Ξcoins*: ${data.e23}💠Ξ
⏧⎔ *🌟SP*: ${data.e24}
⏧⎔ *🌍PC Exploration*: ${data.e25}
⏧⎔ *⚙️PC Crafting*: ${data.e26}
⏧⎔ *👊🏼PC Combat*: ${data.e27}
⏧⎔ *🛞PC Conduite*: ${data.e28}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e29}
⏧⎔ *💠Ξcoins*: ${data.e30}💠Ξ
⏧⎔ *🌟SP*: ${data.e31}
⏧⎔ *🌍PC Exploration*: ${data.e32}
⏧⎔ *⚙️PC Crafting*: ${data.e33}
⏧⎔ *👊🏼PC Combat*: ${data.e34}
⏧⎔ *🛞PC Conduite*: ${data.e35}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                       💠ΞLYSIUM2162`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/3a817ee775dff1c0ad789.jpg' }, caption: mesg }, { quoted: ms });
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
        capacite: "e1",
        ecoins: "e2",
        sp: "e3",
        pc_Exploration: "e4",
        pc_crafting: "e5",
        pc_combat: "e6",
        pc_conduite: "e7",
      };
        break;
              
      case "":
      colonnesJoueur = {
        capacite: "e8",
        ecoins: "e9",
        sp: "e10",
        pc_Exploration: "e11",
        pc_crafting: "e12",
        pc_combat: "e13",
        pc_conduite: "e14",
      };
        break;  

      case "":
      colonnesJoueur = {
        capacite: "e15",
        ecoins: "e16",
        sp: "e17",
        pc_Exploration: "e18",
        pc_crafting: "e19",
        pc_combat: "e20",
        pc_conduite: "e21",
      };
        break; 

       case "":
      colonnesJoueur = {
        capacite: "e22",
        ecoins: "e23",
        sp: "e24",
        pc_Exploration: "e25",
        pc_crafting: "e26",
        pc_combat: "e27",
        pc_conduite: "e28",
      };
        break;      

     case "":
      colonnesJoueur = {
        capacite: "e29",
        ecoins: "e30",
        sp: "e31",
        pc_Exploration: "e32",
        pc_crafting: "e33",
        pc_combat: "e34",
        pc_conduite: "e35",
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
            const query = `UPDATE elfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 11`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE elfiche
            SET ${colonneObjet} = $1
            WHERE id = 11
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE Capacité*: ${texte}`);
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
    nomCom: 'nm3',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('12');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*♻️Serveur 🌃*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e1}
⏧⎔ *💠Ξcoins*: ${data.e2}💠Ξ
⏧⎔ *🌟SP*: ${data.e3}
⏧⎔ *🌍PC Exploration*: ${data.e4}
⏧⎔ *⚙️PC Crafting*: ${data.e5}
⏧⎔ *👊🏼PC Combat*: ${data.e6}
⏧⎔ *🛞PC Conduite*: ${data.e7}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e8}
⏧⎔ *💠Ξcoins*: ${data.e9}💠Ξ
⏧⎔ *🌟SP*: ${data.e10}
⏧⎔ *🌍PC Exploration*: ${data.e11}
⏧⎔ *⚙️PC Crafting*: ${data.e12}
⏧⎔ *👊🏼PC Combat*: ${data.e13}
⏧⎔ *🛞PC Conduite*: ${data.e14}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e15}
⏧⎔ *💠Ξcoins*: ${data.e16}💠Ξ
⏧⎔ *🌟SP*: ${data.e17}
⏧⎔ *🌍PC Exploration*: ${data.e18}
⏧⎔ *⚙️PC Crafting*: ${data.e19}
⏧⎔ *👊🏼PC Combat*: ${data.e20}
⏧⎔ *🛞PC Conduite*: ${data.e21}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*: 
⏧⎔ *🌐Cyber capacité*: ${data.e22}
⏧⎔ *💠Ξcoins*: ${data.e23}💠Ξ
⏧⎔ *🌟SP*: ${data.e24}
⏧⎔ *🌍PC Exploration*: ${data.e25}
⏧⎔ *⚙️PC Crafting*: ${data.e26}
⏧⎔ *👊🏼PC Combat*: ${data.e27}
⏧⎔ *🛞PC Conduite*: ${data.e28}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e29}
⏧⎔ *💠Ξcoins*: ${data.e30}💠Ξ
⏧⎔ *🌟SP*: ${data.e31}
⏧⎔ *🌍PC Exploration*: ${data.e32}
⏧⎔ *⚙️PC Crafting*: ${data.e33}
⏧⎔ *👊🏼PC Combat*: ${data.e34}
⏧⎔ *🛞PC Conduite*: ${data.e35}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                       💠ΞLYSIUM2162`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/3a817ee775dff1c0ad789.jpg' }, caption: mesg }, { quoted: ms });
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
        capacite: "e1",
        ecoins: "e2",
        sp: "e3",
        pc_Exploration: "e4",
        pc_crafting: "e5",
        pc_combat: "e6",
        pc_conduite: "e7",
      };
        break;
              
      case "":
      colonnesJoueur = {
        capacite: "e8",
        ecoins: "e9",
        sp: "e10",
        pc_Exploration: "e11",
        pc_crafting: "e12",
        pc_combat: "e13",
        pc_conduite: "e14",
      };
        break;  

      case "":
      colonnesJoueur = {
        capacite: "e15",
        ecoins: "e16",
        sp: "e17",
        pc_Exploration: "e18",
        pc_crafting: "e19",
        pc_combat: "e20",
        pc_conduite: "e21",
      };
        break; 

       case "":
      colonnesJoueur = {
        capacite: "e22",
        ecoins: "e23",
        sp: "e24",
        pc_Exploration: "e25",
        pc_crafting: "e26",
        pc_combat: "e27",
        pc_conduite: "e28",
      };
        break;      

     case "":
      colonnesJoueur = {
        capacite: "e29",
        ecoins: "e30",
        sp: "e31",
        pc_Exploration: "e32",
        pc_crafting: "e33",
        pc_combat: "e34",
        pc_conduite: "e35",
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
            const query = `UPDATE elfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 12`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE elfiche
            SET ${colonneObjet} = $1
            WHERE id = 12
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE Capacité*: ${texte}`);
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
    nomCom: '',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*♻️Serveur 🌃*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e1}
⏧⎔ *💠Ξcoins*: ${data.e2}💠Ξ
⏧⎔ *🌟SP*: ${data.e3}
⏧⎔ *🌍PC Exploration*: ${data.e4}
⏧⎔ *⚙️PC Crafting*: ${data.e5}
⏧⎔ *👊🏼PC Combat*: ${data.e6}
⏧⎔ *🛞PC Conduite*: ${data.e7}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e8}
⏧⎔ *💠Ξcoins*: ${data.e9}💠Ξ
⏧⎔ *🌟SP*: ${data.e10}
⏧⎔ *🌍PC Exploration*: ${data.e11}
⏧⎔ *⚙️PC Crafting*: ${data.e12}
⏧⎔ *👊🏼PC Combat*: ${data.e13}
⏧⎔ *🛞PC Conduite*: ${data.e14}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*:
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e15}
⏧⎔ *💠Ξcoins*: ${data.e16}💠Ξ
⏧⎔ *🌟SP*: ${data.e17}
⏧⎔ *🌍PC Exploration*: ${data.e18}
⏧⎔ *⚙️PC Crafting*: ${data.e19}
⏧⎔ *👊🏼PC Combat*: ${data.e20}
⏧⎔ *🛞PC Conduite*: ${data.e21}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*: 
⏧⎔ *🌐Cyber capacité*: ${data.e22}
⏧⎔ *💠Ξcoins*: ${data.e23}💠Ξ
⏧⎔ *🌟SP*: ${data.e24}
⏧⎔ *🌍PC Exploration*: ${data.e25}
⏧⎔ *⚙️PC Crafting*: ${data.e26}
⏧⎔ *👊🏼PC Combat*: ${data.e27}
⏧⎔ *🛞PC Conduite*: ${data.e28}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

⏧⎔ *🎮Pseudo*: 
⏧⎔ *👤User*:
⏧⎔ *🌐Cyber capacité*: ${data.e29}
⏧⎔ *💠Ξcoins*: ${data.e30}💠Ξ
⏧⎔ *🌟SP*: ${data.e31}
⏧⎔ *🌍PC Exploration*: ${data.e32}
⏧⎔ *⚙️PC Crafting*: ${data.e33}
⏧⎔ *👊🏼PC Combat*: ${data.e34}
⏧⎔ *🛞PC Conduite*: ${data.e35}
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                       💠ΞLYSIUM2162`;
zk.sendMessage(dest, { image: { url: '' }, caption: mesg }, { quoted: ms });
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
        capacite: "e1",
        ecoins: "e2",
        sp: "e3",
        pc_Exploration: "e4",
        pc_crafting: "e5",
        pc_combat: "e6",
        pc_conduite: "e7",
      };
        break;
              
      case "":
      colonnesJoueur = {
        capacite: "e8",
        ecoins: "e9",
        sp: "e10",
        pc_Exploration: "e11",
        pc_crafting: "e12",
        pc_combat: "e13",
        pc_conduite: "e14",
      };
        break;  

      case "":
      colonnesJoueur = {
        capacite: "e15",
        ecoins: "e16",
        sp: "e17",
        pc_Exploration: "e18",
        pc_crafting: "e19",
        pc_combat: "e20",
        pc_conduite: "e21",
      };
        break; 

       case "":
      colonnesJoueur = {
        capacite: "e22",
        ecoins: "e23",
        sp: "e24",
        pc_Exploration: "e25",
        pc_crafting: "e26",
        pc_combat: "e27",
        pc_conduite: "e28",
      };
        break;      

     case "":
      colonnesJoueur = {
        capacite: "e29",
        ecoins: "e30",
        sp: "e31",
        pc_Exploration: "e32",
        pc_crafting: "e33",
        pc_combat: "e34",
        pc_conduite: "e35",
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
            const query = `UPDATE elfiche SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 1`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE elfiche
            SET ${colonneObjet} = $1
            WHERE id = 1
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE Capacité*: ${texte}`);
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
