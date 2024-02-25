const { zokou } = require('../framework/zokou');

//debut tirage card 💎
const ssm = [];
const ss = [];
const ssp = [];
const sspsuper = [];
const sspmega = [];
const sspultra = [];
const sspultimate = [];
 // fin tirage card 💎

 //debut tirage 🥇
 const sm1 = ['https://telegra.ph/file/426754902fd6c891f7af5.jpg',
              'https://telegra.ph/file/a21dfbda488fd0f52de69.jpg',
              'https://telegra.ph/file/39b375e4a8f88051ccdb9.jpg'
             ];
 const s1 = [];
 const sp1 = [];
 const spsuper1 = [];
//fin tirage 🥇

// debut tirage 🥈
 const sm2 = ['https://telegra.ph/file/672a24193384b4bd8e1fd.jpg',
              'https://telegra.ph/file/86921b5a9ef7da3c14bd0.jpg',
              'https://telegra.ph/file/cfcbfa4137e6eb8f4de66.jpg'
              ];
 const s2 = [];
 const sp2 = [];
 const spsuper2 = [];
//Fin tirage 🥈

 
 // debut tirage 🥉
 const sm3 = ['https://telegra.ph/file/94381c3e145584c2ab242.jpg',
              'https://telegra.ph/file/7b4cf81d7b513ea55cf5e.jpg',
              'https://telegra.ph/file/eb19ddad296b886852364.jpg'
              ];
 const s3 = ['https://telegra.ph/file/7a9aa8472b2d0a5fdbce7.jpg',
             'https://telegra.ph/file/333e26a425921aa0fbd28.jpg',
             'https://telegra.ph/file/e703f7dc768221631c661.jpg',
             'https://telegra.ph/file/efb8a9cc825806ca6ae50.jpg',
             'https://telegra.ph/file/53d0e138ee09c032d6899.jpg',
             'https://telegra.ph/file/d7728b4458bfe6eed9051.jpg',
             'https://telegra.ph/file/46b20b4ccb6ca65993d1d.jpg',
             'https://telegra.ph/file/292a10e8928829ee7de07.jpg',
             'https://telegra.ph/file/b497b91dd06bebf7f208e.jpg'
             ];
 const sp3 = ['https://telegra.ph/file/53e00960b21589b85981b.jpg',
              'https://telegra.ph/file/a26e4fa9d5f0dda2a5a60.jpg'
              ];
  const spsuper3 = [];
 // fin tirage 🥉
   

function lien (lien) {
    const indiceAleatoire = Math.floor(Math.random() * lien.length);
    const lienAleatoire = lien[indiceAleatoire];
    return lienAleatoire;
}


 const lien1 = lien(ss);
 const lien2 = lien(ssp);
 const lien3 = lien(sspsuper);
 const lien4 = lien(sspmega);
 const lien5 = lien(sspultra);
 const lien6 = lien(sspultimate);
 const lien8 = lien(ssm);
 const lien7 = lien(s1);
 const lien9 = lien(sp1);
 const lien10 = lien(spsuper1);
 const lien11 = lien(sm1);
 const lien12 = lien(s2);
 const lien13 = lien(sp2);
 const lien14 = lien(spsuper2);
 const lien15 = lien(sm2);
 const lien16 = lien(s3);
 const lien17 = lien(sp3);
 const lien18 = lien(spsuper3);
 const lien19 = lien(sm3);
 
zokou(
  { 
    nomCom: "tirage", 
    reaction: "🎰", 
    categorie: "NEOverse" 
  }, 
  async (dest, zk, commandeOptions) => {
    const { repondre, arg, ms } = commandeOptions;
   const niveau = arg[0];
   try {

        // Déterminer le type de carte à tirer en fonction du niveau spécifié
        switch (niveau) {
            case "💎":
                const ss_pourcentage = [5, 4, 3, 2, 1.5, 1, 0.5];
                const p1 = tirerCarte(ss_pourcentage, 1.5);
                if (p1  === 4) {
                    zk.sendMessage(dest, { image: { url: lien1 } }, { quoted: ms });
                  await sleep(3000);
                 lien();
                    zk.sendMessage(dest, { image: { url: lien1 } }, { quoted: ms });
               lien(); } else if (p1 === 3) {
                    zk.sendMessage(dest, { image: { url: lien2 } }, { quoted: ms });
                   await sleep(3000);
                 lien();
                     zk.sendMessage(dest, { image: { url: lien2 } }, { quoted: ms });
             lien();   } else if (p1 === 2) {
                    zk.sendMessage(dest, { image: { url: lien3 } }, { quoted: ms });
                  await sleep(3000);
                 lien();
                      zk.sendMessage(dest, { image: { url: lien3 } }, { quoted: ms });
               lien(); } else if (p1 === 1.5) {
                    zk.sendMessage(dest, { image: { url: lien4 } }, { quoted: ms });
                  await sleep(3000);
                 lien();
                      zk.sendMessage(dest, { image: { url: lien4 } }, { quoted: ms });
              lien();  } else if (p1 === 1) {
                    zk.sendMessage(dest, { image: { url: lien5 } }, { quoted: ms });
               await sleep(3000);
                 lien();
                         zk.sendMessage(dest, { image: { url: lien5 } }, { quoted: ms });
               lien(); } else if (p1 === 0.5) {
                    zk.sendMessage(dest, { image: { url: lien6 } }, { quoted: ms });
                   await sleep(3000);
                 lien();
                     zk.sendMessage(dest, { image: { url: lien6 } }, { quoted: ms });
               lien(); } else {
                    zk.sendMessage(dest, { image: { url: lien7 } }, { quoted: ms });
                  await sleep(3000);
                 lien();
                      zk.sendMessage(dest, { image: { url: lien7 } }, { quoted: ms });
            lien();    }
                break;
            case "🥇":
                const le_pourcentage = [7, 5, 3, 2];
                const p2 = tirerCarte(le_pourcentage, 1.5);
                if (p2 === 5) {
                    zk.sendMessage(dest, { image: { url: lien8 } }, { quoted: ms });
                 await sleep(3000);
                 lien();
                       zk.sendMessage(dest, { image: { url: lien8 } }, { quoted: ms });
               lien(); } else if (p2 === 3) {
                    zk.sendMessage(dest, { image: { url: lien9 } }, { quoted: ms });
                 await sleep(3000);
                 lien();
                       zk.sendMessage(dest, { image: { url: lien9 } }, { quoted: ms });
               lien(); } else if (p2 === 2) {
                    zk.sendMessage(dest, { image: { url: lien10 } }, { quoted: ms });
                await sleep(3000);
                 lien();
                        zk.sendMessage(dest, { image: { url: lien10 } }, { quoted: ms });
              lien();  } else {
                    zk.sendMessage(dest, { image: { url: lien11 } }, { quoted: ms });
               await sleep(3000);
                 lien();
                         zk.sendMessage(dest, { image: { url: lien11 } }, { quoted: ms });
            lien();    }
                break;
            case "🥈":
                const ul_pourcentage = [40, 30, 20, 10];
          const p3 = tirerCarte(_pourcentage, 1.5);
                if (p3 === 30) {
                    zk.sendMessage(dest, { image: { url: lien12 } }, { quoted: ms });
              await sleep(3000);
                 lien();
                          zk.sendMessage(dest, { image: { url: lien12 } }, { quoted: ms });
             lien();   } else if (p3 === 20) {
                    zk.sendMessage(dest, { image: { url: lien13 } }, { quoted: ms });
               await sleep(3000);
                 lien();
                         zk.sendMessage(dest, { image: { url: lien13 } }, { quoted: ms });
            lien();    } else if (p3 === 10) {
                    zk.sendMessage(dest, { image: { url: lien14 } }, { quoted: ms });
               await sleep(3000);
                 lien();
                         zk.sendMessage(dest, { image: { url: lien14 } }, { quoted: ms });
             lien();   } else {
                    zk.sendMessage(dest, { image: { url: lien15 } }, { quoted: ms });
           await sleep(3000);
                 lien();
                             zk.sendMessage(dest, { image: { url: lien15 } }, { quoted: ms });
              lien();  }
                break;
            case "🥉":
                const sp_pourcentage = [90, 70, 60, 50];
                const p4 = tirerCarte(sp_pourcentage, 1.5);
                if (p4 === 70) {
                    zk.sendMessage(dest, { image: { url: lien16 } }, { quoted: ms });
             await sleep(3000);
                 lien();
                           zk.sendMessage(dest, { image: { url: lien16 } }, { quoted: ms });
             lien();   } else if (p4 === 60) {
                    zk.sendMessage(dest, { image: { url: lien17 } }, { quoted: ms });
              await sleep(3000);
                 lien();
                          zk.sendMessage(dest, { image: { url: lien17 } }, { quoted: ms });
            lien();    } else if (p4 === 50) {
                    zk.sendMessage(dest, { image: { url: lien18 } }, { quoted: ms });
           await sleep(3000);
                 lien();
                             zk.sendMessage(dest, { image: { url: lien18 } }, { quoted: ms });
               lien(); } else {
                    zk.sendMessage(dest, { image: { url: lien19 } }, { quoted: ms });
           await sleep(3000);
                 lien();
                             zk.sendMessage(dest, { image: { url: lien19 } }, { quoted: ms });
          lien();      } 
                break;
            default:
                console.error("Niveau invalide");
                return;
        }
   } catch (error) {
    console.error('une erreur est survenue', error);
   repondre('une erreur est surevenu');
  }
  }
 );
// Fonction pour choisir un pourcentage au hasard avec une probabilité ajustée
function tirerCarte(listePourcentages, facteurAttenuation) {
    // Calculer la somme des pourcentages
    const sommePourcentages = listePourcentages.reduce((acc, pourcentage) => acc + pourcentage, 0);
    
    // Calculer le facteur d'atténuation inverse (pour inverser l'effet sur les pourcentages)
    const inverseFacteurAttenuation = 1 / facteurAttenuation;
    
    // Générer un nombre aléatoire entre 0 et la somme des pourcentages
    const randomValue = Math.random() * sommePourcentages;
    
    // Parcourir la liste des pourcentages et choisir un indice en fonction du nombre aléatoire
    let cumulatif = 0;
    for (let i = 0; i < listePourcentages.length; i++) {
        // Ajuster la probabilité en fonction du pourcentage et du facteur d'atténuation
        const probabiliteAjustee = Math.pow(listePourcentages[i], inverseFacteurAttenuation);
        
        cumulatif += probabiliteAjustee;
        if (randomValue <= cumulatif) {
            return listePourcentages[i];
        }
    }
    
    // Si aucune valeur n'est choisie (ce qui ne devrait pas arriver normalement), retourner la dernière valeur
    return listePourcentages[listePourcentages.length - 1];
}

/*// Exemple d'utilisation avec une liste de pourcentages et un facteur d'atténuation
const listePourcentages = [10, 20, 30, 40]; // Plus élevé en premier, plus faible en dernier
const facteurAttenuation = 2; // Ajustez ce facteur selon vos besoins
const pourcentageChoisi = choisirPourcentageAjuste(listePourcentages, facteurAttenuation);
console.log("Pourcentage choisi :", pourcentageChoisi);
*/

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
