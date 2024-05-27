const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'menuneo',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/4696c5412e6bb7a80166c.jpg';
            const msg = '';
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
        }
    }
);

zokou(
    {
        nomCom: 'seasonpass',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/79474acac8fb14180f7d5.jpg';
            const msg = `▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                  *🏆𝗠𝗔𝗧𝗖𝗛 𝗨𝗣🏆*
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Désormais la ligue organise des matchs up  entre des joueurs par affinités(classement, rivalité, défi...). Les matchs up seront programmés pour les prochaines 48h, un joueur peut lancer un défi à un autre joueur et pour refuser un défi vous pouvez utiliser 10🔷, sinon vous êtes obligé de faire ce match avant de faire une autre activité sinon amende et sanction. Celui qui a proposé peut continuer ses activités en attendant. En évitant le défi c'est un Forfait et ne pas se présenter est une amende de 500.000🧭.

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
              *🏆𝗥𝗔𝗡𝗞𝗜𝗡𝗚 𝗠𝗔𝗧𝗖𝗛𝗦🏆*
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Vous pouvez defier un joueur haut placé pour un Rang ainsi vous gagnez le même nombre de pts que lui en cas de victoire, mais cela coûte 10🔷Vous pouvez donc facilement passer devant un joueur pour prendre sa place dans la saison. *⚠️Uniquement pour les joueurs avec 12 pts minimum la saison*. 

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                  ⬆️ *𝗣𝗥𝗢𝗠𝗢𝗧𝗜𝗢𝗡 ⬇*
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
À la fin de la saison les TOP 3🏆 avec minimum 5 Victoires sont promus en classe supérieure et les 2 derniers sont relégués. 

⚠️En quittant sans prévenir vous serez entièrement effacé des mémoires de la ligue comme si vous n'aviez jamais exister, Si vous perdez le contrôle et quitter sur un coût de tête pour revenir à NEOverse vous allez devoir être déchu au rang de Rookie donc perdre tout ce que vous avez déjà eu, avec 2 mois minimum avant de revenir. Si vous prenez votre retraite nous allons annoncer et il ne sera plus possible de continuer à NEOverse, si vous êtes indisponible vous pouvez figer votre fiche sur 5 mois max. 
═══════════
👉🏻 +Recompenses🎁
👉🏻 +Tournois🏆
👉🏻 +Menu UF⚽
👉🏼 +Menu NBA🏀
👉🏻 +Menu Elysium💠

░░░░░░░░░░░░░░░
                                  
                                    *🔷NSL🏆🔝*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'recompenses',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/a9bbf6fac3cc23d66f1a2.jpg';
            const msg = `*🔷𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗲𝘀 𝗳𝗶𝗻 𝗱𝗲 𝘀𝗮𝗶𝘀𝗼𝗻🎁🎊*
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🔷Les Top 3 de chaques classes seront les ALL STARS de la prestigieuse *TOS⭐*, *Team of the Season⭐*. Pour être membre de la TOS Vous devez finir Top 3 de votre classe avec minimum *12 pts*, 10 matchs et affronter tous les joueurs actifs de votre classe. 

*🥇LÉGENDS🏆:*
1️⃣🥇:1.000.000🧭+100🔷+🎁+100🎟️
2️⃣🥈: 800.000🧭+50🔷+🎁+50🎟️
3️⃣🥉: 600.000🧭+20🔷+🎁+20🎟️

*🥈ELITES🏆*
1️⃣🥇: 800.000🧭+50🔷+🎁+50🎟️
2️⃣🥈: 600.000🧭+25🔷+🎁+20🎟️
3️⃣🥉: 400.000🧭+10🔷+10🎟️

*🥉NOVICES🏆*
1️⃣🥇: 600.000🧭+20🔷+🎁+20🎟️
2️⃣🥈: 400.000🧭+10🔷+10🎟️
3️⃣🥉: 200.000🧭

*🔷𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗲𝘀 𝗱𝗲 𝗹𝗮 𝘀𝗲𝗺𝗮𝗶𝗻𝗲🎁🎊*
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Weekly, TOW💙, #Team of the week:
🔹 *Week player*: 200.000🧭+5🔷+2🎟️
🔹 *TOP 3*: 100.000🧭 +2🔷+1🎟️
⚠️Pour y figurer vous devez avoir minimum 3 victoires la semaine et 5 matchs.`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'tournois🏆',   
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0) {
            const lien = 'https://telegra.ph/file/996dd76bb9d55157c0fb3.jpg';
            const msg = `*🔷𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗲𝘀 𝗧𝗼𝘂𝗿𝗻𝗼𝗶𝘀🏆🎁*
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Les Récompenses sont alléchantes pendant les tournois sont alléchantes, nous avons deux tournois majeurs dans la saison NEO🏆,le *NEO TOUR EVO* et le *GRAND SLAM🏆*, 8 à 16 participants max. 
🎖️ *WIN*: 1.000.000🧭+50🔷+🎁🥈+20🎟️

*🏆Super Champions(SCC)CUP🏆*:
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
c'est une super finale entre le MNVP de la saison régulière et le champion du tournoi *NEO TOUR EVO💠*, *GRAND SLAM🏆*. 
🎖️ *WIN*: 500.000🧭+30🔷+🎁🥈+20🎟️

*🛡️𝗜𝗻𝘁𝗲𝗿𝗱𝗶𝘃𝗶𝘀𝗶𝗼𝗻𝘀 𝗖𝘂𝗽🏆*
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Les divisions s'affrontent en alignant leurs joueurs pour représenter la Division. Seulement 3 joueurs max, les combats se font en 1 vs 1 pour un total de 2 victoires, si une division gagne déjà 2-0 c'est un *Swipe* qualifiée pour le tour suivant mais si 1-1, un 3e match.

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
 ⚠️Selon le règlement des tournois s'inscrire à un tournoi puis ne pas se présenter équivaut à une amende de -500.000🧭 -25🔷 et -20🎟️`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

/*zokou(
    {
        nomCom: 'neo',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (arg[0] ==='Golden' && arg[1] === 'awards 💫')  {
            const lien = 'https://telegra.ph/file/da23e9bad5a273dfafb21.mp4';
            const msg = `🔶𝗡Ξ𝗢💫𝗚𝗼𝗹𝗱𝗲𝗻 𝗔𝗪𝗔𝗥𝗗𝗦
░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Les Awards de NEO se reposent à 80% sur les performances des joueurs que sur l'opinion de la communauté pour éviter les fraudes, car NEO a remarqué que il y'avait énormément de triches dans les Récompenses des communautés avec des joueurs qui allaient démander à leurs amis de Spamer les votes pour eux ce qui a fait gagner beaucoup de personnes Incompétentes des Prix au détriment des personnes réellement talentueuses c'est pas le cas de Neo qui révolutionne cela. *⚠️Vous pouvez donc oublier les prix par Relations où affinités, les Awards de NEOverse sont basés sur des faits observés et justifiés au cours de la saison et la logique.*

💫 *𝗧𝗵𝗲 𝗕𝗘𝗦𝗧🏆*
▔▔▔▔▔▔▔▔▔▔
Le Prix récompensant le meilleur joueur NEO sur la saison parmis les 3 MNVP:
🔸Critère pour gagner:
*⭐Être le meilleur des 3 MNVP*

💫 *𝗟𝗲 𝗟𝗮𝘂𝗿𝗲𝗮𝘁 𝗱𝘂 𝗦𝗜𝗚𝗠𝗔🗿*
▔▔▔▔▔▔▔▔▔▔▔▔
Prix d'honneur, le lauréat du joueur le plus marquant, inspirant, le model de la saison avec un système de sandage avec vote justifié, 9 joueurs Nominés parmis les *TOS🌟* et 10 votants désignés:
⭐ Votes de la NSL: *90%*
⭐ Performances de la saison: *10%*

💫 *𝗣𝗿𝗶𝘅 𝗡Ξ𝗢🏆*
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Statuettes de Prix récompensant les meilleurs NEO players selon les critères de sélection de l'institution par comparaison:

*💠Elysium ONE* (Meilleur joueur MA Elysium) 
*🏆Sports Gamer*: (Meilleur joueur UF et NBA) 
*⭐Potentiel* (Saison du meilleur Rookie en Pro) 
*🔥Hyper actif* (Joueur le plus actif NEOverse) 
*🫱🏽‍🫲🏻Fair-play* (joueur le plus fair-play) 
*🍿Spectacle* (joueur avec les plus beaux combats) 
*⚠️Beauté des pavés, Combats, immersion.* 
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🏆The BEST*: 1M🧭+20🎟️+50🔹+🎁🥈
*🗿Sigma*: 1M🧭+20🎟️+50🔹+🎁🥈
*🏆Prix 𝗡Ξ𝗢*: 300k🧭+10🎟️+10🔷+🎁🥉
*⚠️Pas de récompense si vous participez pas aux votes et à l'événement*

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
               🔶𝗡Ξ𝗢💫GOLDEN AWARDS`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
*/
zokou(
    {
        nomCom: 'saison',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (arg[0] === 'UF🥅')  {
            const lien = 'https://telegra.ph/file/2c25e13956f7d292b8a0f.jpg';
            const msg = `*𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝘂𝗲 𝗱𝗮𝗻𝘀 𝗹𝗮 𝘀𝗮𝗶𝘀𝗼𝗻 𝗨𝗙🥅*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Lors de la saison UF, les équipes sont séparées en deux ligues...la Divisions Stars et la division Novices, nous viserons 3 ligues si y'a plus de joueurs. Les 6 premiers de la division ONE vont se qualifier pour la ligue des champions et les 2 premiers de la Division SECOND aussi. 

*𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗲𝘀 𝗠𝗔𝗧𝗖𝗛𝗦🥅*
⚽Pour 5 matchs:  5.000.000 €
⚽Pour 5 victoires: 25.000.000 € + 10 UFC🪙
⚽Pour 10 matchs: 10.000.000 € + 5 UFC🪙
⚽Pour 10 victoires: 50.000.000 € + 50 UFC🪙

*𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗲𝘀 𝗳𝗶𝗻 𝗱𝗲 𝗦𝗮𝗶𝘀𝗼𝗻🥅🎁*
🎖️Top 1: +100M € + 70 UFC🪙+100🔷+50🎟️
🥈 Top 3: 50M € + 30 UFC🪙+50🔷+20🎟️
🥉 Top 6: 20M € + 10 UFC🪙+20🔷+10🎟️
🏆UEFA: 100M € + 90 UFC🪙+100🔷+50🎟️

*⚠️Récompenses avec minimum 5 matchs*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                     *UF🥅🔝*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        } else if (arg[0] === 'NBA🏀'); {
            const lien = 'https://telegra.ph/file/c70106c58248322fac390.jpg';
            const msg = `*𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝘂𝗲 𝗱𝗮𝗻𝘀 𝗹𝗮 𝘀𝗮𝗶𝘀𝗼𝗻 NBA🏀*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Lors de la saison NBA, les équipes sont séparées en deux Conférences...la conférence WEST🔴 et la conférence EAST🔵 . Les 8 premiers de chaques conferences joueront les PLAYOFFS mais dans un debut nous allons faire un championnat combiné 🔴WEST/EAST🔵 et les 8 premiers seront aux playoffs les. 

🏀Pour 5 matchs:  5.000.000 $
🏀Pour 5 victoires: 25.000.000 $ + 10 NBC⭕
🏀Pour 10 matchs: 10.000.000 $ + 5 NBC⭕
🏀Pour 10 victoires: 50.000.000 $ + 50 NBC⭕

*𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗲𝘀 𝗱𝗲 𝗦𝗮𝗶𝘀𝗼𝗻🏀🎁*
🎖️Top 1: +100M$ + 70 NBC⭕+100🔷+50🎟️
🥈 Top 3: 50M$ + 30 NBC⭕+50🔷+20🎟️
🥉 Top 6: 20M$ + 10 NBC⭕
🏆Finals: 100M$ + 90 NBC⭕+100🔷+50🎟️

*⚠️Récompenses avec minimum 5 matchs*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                     *NBA2K🏀NE⭕*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
 /*  } else (arg[0] === 'Elysium💠')  {
            const lien = 'https://telegra.ph/file/bdd957fe4f3c12dfdeb66.jpg';
            const msg = `*💠Elysium Season PASS💠*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
L'épisode D'elysium aura lieu de 19h à 22h GMT+1, les participants devront s'enregistrer à l'avance dans la journée pour participer. L'enregistrement coûte 2 NC🔷 et c'est uniquement pour les joueurs classés(ALL STARS, NBA et UF). la journée dure généralement 20 tours, les nouveaux joueurs pourront rejoindre seulement à partir de 5 tours passés avec pause de 5mins en cas de retard. 

*💠RÈGLEMENT DES LIEUX*
Les joueurs ne peuvent pas être partout à la Fois, afin d'éviter la divulgation d'informations d'activités. *⚠️donc une fois que vous voyagez vous devez quitter le groupe où vous êtes vers le nouveau Lieu que vous Pouvez Facilement Rejoindre à Travers la Communauté .* ‼️Si vous vous faites retirer de force alors 5🔷 pour revenir. 

*💠MISSIONS ET FREE PLAY*
Le but de Élysium est d'abord le free play donc Explorer un monde Gigantesque et trouver les ressources. Mais néanmoins vous pouvez aller rencontrer des PNJ qui vous proposeront des missions et quêtes *💠Lancer la mission XP* et un PNJ ne peut avoir que 2 à 3 quêtes disponibles avant de renouveler.

🥉 *Normale*: +100.000💠+10🌟 
🥈 *Difficile*: +300.000💠 +20🌟
🥇 *Extreme*: +500.000💠+30🌟

💠Vous gagnez des PC selon l'activité que vous faites +5 PC et vous gagnez des SP🌟 par rapport à vos achats et votre style de vie, après 3 tours vous perdez -20%😃 moral à moins de 20%😟 vous devenez imprécis et incapable de réussir vos actions, vous attirez même la malchance. 

⚠️Si vous êtes mort où arrêté c'est GAME OVER❌et vous perdez -10🌟 journée est terminée, vous allez seulement pouvoir revenir le prochain épisode. 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔                                 *💠Processing...*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   */
        }
    });


zokou(
    {
        nomCom: 'records',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/2a2abe4cba6749fb70877.jpg';
            const msg = `. 
           ══════༺༻═══
            ⚜️\`\`\` 𝐋𝐈𝐕𝐑𝐄𝐒 𝐃'𝐇𝐈𝐒𝐓𝐎𝐈𝐑𝐄 \`\`\`⚜️
           ═════ ༺༻═══
Voici les pantheons du Nouveau monde, le livre des performances mémorables et légendaires  du nouveau monde ! ceux qui ont écrit leurs noms parmi les Astres et les plus grands à tout jamais dans le nouveau monde. 

*🔸+Champions 🏆*
*🔸+MNVP🌟*
*🔸+TOS⭐* 
*🔸+Awards 💫*
 ══════༺༻═══
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                  *🔶𝗡Ξ𝗢💫*

.`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'champions🏆',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/856864a64984161a8f1a8.jpg';
            const msg = `══════༺༻═══
                         🏆\`\`\`𝐂𝐇𝐀𝐌𝐏𝐈𝐎𝐍𝐒\`\`\`🏆
                 ══════༺༻═══
                  
Voici le panthéon des Champions du Nouveau monde✨🏆ceux qui ont un déjà rempoter un tournoi à NEOverse ! NEO TOUR EVO💠, GRAND SLAM🏆et SUPER CHAMPIONS CUP🏆(SCC) . 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🔸🔴NEO KÏNGS⚜️🇨🇬:       🏆 
🔸🔵ABA L. KÏNGS⚜️🇸🇳:   🏆
🔸🔴Lily KÏNGS⚜️🇨🇬:         🏆🏆🏆
🔸🔴Damian KÏNGS⚜️🇨🇬 : 🏆🏆🏆
🔸🔵Vanitas KÏNGS⚜️🇸🇳:  🏆
🔸🟢Adam GENESIS🇨🇮:  🏆



░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
De nouveaux Guerriers viendront chercher le titre de "CHAMPION" afin graver leurs noms à tout jamais parmi les immortels dans la légende du nouveau monde RP. Are you the NEXT KING? 👑
                    ══════༺༻═══                  
                                🔶𝗡Ξ𝗢💫`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'mnvp⭐',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/8370fd4da3413d1e629f8.jpg';
            const msg = `. 
                   ══════༺༻═══
      💫 \`\`\`𝐌𝐎𝐒𝐓 𝐍𝐄𝐎 𝐕𝐀𝐋𝐔𝐀𝐁𝐋𝐄 𝐏𝐋𝐀𝐘𝐄𝐑\`\`\` 💫
                      ═════ ༺༻═══

Livre  prestigieux de ceux qui ont inscrit leurs noms dans l'histoire en finissant *MNVP de leurs classes🎖️* , les meilleurs joueurs de la saison régulière par classe les TOP1🏆. 
🥇 *Niveau LEGENDS*: ⭐⭐⭐(Extreme) 
🥈 *Niveau ÉLITES*: ⭐⭐(Moyen) 
🥉 *Niveau NOVICES*:⭐(Facile) 

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🥇Damian KÏNGS⚜️🇨🇬: 🎖️🎖️🎖️🎖️🎖️🎖️ 
🥇Lily KÏNGS⚜️🇨🇬:         🎖️🎖️🎖️🎖️
🥈Vanitas G KÏNGS⚜️🇸🇳:  🎖️
🥈Adam GENESIS🇨🇮:  🎖️
🥈Grimm TEMPEST🇨🇲:  🎖️
🥈Vyrozz🇹🇬:  🎖️
🥈Zephyr🇨🇮: 🎖️
🥉Kemael🇨🇮:  🎖️
🥉White KÏNGS⚜️🇨🇮:  🎖️
🥉Hazlay🇸🇳: 🎖️
        

                                🔶𝗡Ξ𝗢🌟
                     ══════༺༻═══`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'tos⭐',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/bd61428816cc5e36abcad.jpg';
            const msg = `. 
                  ══════༺༻═══
                        🌟𝗧𝗢𝗦: 𝐀𝐋𝐋 𝐒𝐓𝐀𝐑𝐒🌟
                   ═════ ༺༻═══
Voici la catégorie des SUPERSTARS du nouveau monde, ceux qui ont déjà été dans la  *TOS* TEAM OF THE SEASON⭐,la team prestige 🎖️,equivalent aux TOTY⭐. 
*⚠️Notez que vous pouvez prendre votre retraite de NEOverse avec les Honneurs donc une décoration ! Mais si vous quittez en fantôme où entacher votre image vis à vis de la ligue vous perdez votre nom dans le Panthéon d'honneur.* 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*⭐Damian  KÏNGS⚜️🇨🇬*:    7⭐
*⭐Lily KÏNGS⚜️🇨🇬*:             6⭐
*⭐White KÏNGS⚜️🇨🇮*:         3⭐ 
*⭐Vanitas Gold KÏNGS⚜️🇸🇳*: 2⭐
*⭐Aether GENESIS🇬🇦*:         2⭐ 
*⭐Adam GENESIS🇨🇮*:         2⭐ 
*⭐Goldy Shogun🇹🇬*:            2⭐ 
*⭐Atsushi KÏNGS⚜️🇨🇲*:     2⭐
*⭐Kemael🇨🇮*:                        2⭐
*⭐Zephyr🇨🇮*:                          2⭐ 
*⭐Hajime NEXUS🇨🇲*:           1⭐
*⭐Grimm Tempest🇨🇲*:        1⭐ 
*⭐SoloMoe A. KÏNGS⚜️🇸🇳*: 1⭐
*⭐Thanatos Gold KÏNGS⚜️🇧🇫*:  1⭐ 
*⭐The LOA KÏNGS⚜️🇹🇬*:    1⭐
*⭐Adorieru KAMADO🇷🇴*:    1⭐
*⭐Kanzen Gold KING🇨🇮*:    1⭐
*⭐Serena Gold WHITE🇨🇮*:  1⭐

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                   🔶𝗡Ξ𝗢☀️`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

/*zokou(
    {
        nomCom: 'awards💫',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/7d380c5771ac6388f5879.jpg';
            const msg = `. 
                   ══════༺༻═══
                      💫 ''' 𝐆𝐎𝐋𝐃𝐄𝐍 𝐀𝐖𝐀𝐑𝐃𝐒 ''' 💫
                      ═════ ༺༻═══
Voici les gagnants des prestigieux prix Awards et Récompenses aux GOLDEN AWARDS du Nouveau monde RP💫.Venez écrire votre nom dans le panthéon ultime du nouveau monde. 
*⚠️Notez que vous pouvez prendre votre retraite de NEOverse avec les Honneurs donc une décoration ! Mais si vous quittez en fantôme où entacher votre image vis à vis de la ligue vous perdez votre nom dans le Panthéon d'honneur.* 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
💫 *The BEST🏆*
🔸Lily KÏNGS⚜️🇨🇬:                  2🏆
🔸Damian KÏNGS⚜️🇨🇬:          3🏆

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
💫 *The SIGMA🗿*
🔸Lily KÏNGS⚜️🇨🇬:                  1🗿
🔸Damian KÏNGS⚜️🇨🇬:          1🗿

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

💫 *NEO TROPHY🎗️*
🔸Lily KÏNGS⚜️🇨🇬:                   3🎗️
🔸Damian KÏNGS⚜️🇨🇬:           2🎗️ 
🔸White KÏNGS⚜️🇨🇮:              1🎗️ 
🔸Lord  KÏNGS⚜️🇹🇬:               1🎗️ 



        

                 🔶𝗡Ξ𝗢💫GOLDEN AWARDS
                     ══════༺༻═══`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);
*/
zokou(
    {
        nomCom: 'calendar',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/ea19c9f1fe0a7ae1b73fb.jpg';
            const msg = `*🔷CALENDRIER📅*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🔷Nous évoluons avec des saisons altérées mixtes ! Donc si c'est la saison UF nous aurons que des matchs UF ect... Et si il y'a tournois, pas de Élysium le week-end. 


🔹 *Lundi*: versus🆚⚽🏀/🎙️
🔹 *Mardi*: versus🆚⚽🏀/Élysium💠
🔹 *Mercredi*: Versus🆚/⚽🏀
🔹 *Jeudi*: versus🆚⚽🏀/Élysium💠/🎙️
░░░░░░░░░░░░░░░░░░░

🔹 *Vendredi*: Versus🆚/⚽🏀/🏆/🎉
🔹 *Samedi*: Versus🆚⚽🏀/Élysium💠/🏆
🔹 *Dimanche*: versus🆚⚽🏀/Élysium💠/🏆
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🆚 *Versus All stars*: Duels 
🚫 *🎙️Media Day*: Événements Communauté
💠 *Episode D'elysium* : de 19h UTC+1 à 22h max
⚽ *UF Match Day*: journée de Matchs, UEFA 
🏀 *NBA Matchs*: journée de saison NBA
🏆 *Tournois*: Jours des tournois
*🎉NEOversary Friday*: Jours de festival 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                    🔷𝗡Ξ𝗢🔝`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'rankings',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/276dc43753f6a641363ff.jpg';
            const msg = `*𝗥𝗔𝗡𝗞𝗜𝗡𝗚🔰 𝗡𝗘𝗢🔷➕*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🔹 *Awards*: 5💫
🔹 *TOS🌟*: 5🏆
🔹 *Trophées*: 5🏆
🔹 *Nombre de victoires*: 100✅
🔹 *Récompenses*: 2.000.000🧭+🎁+50🔷
🥇 *HOF 🌠* :  GRADE S+ ⭐⭐⭐⭐⭐
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🔹 *Awards*: 3💫
🔹 *TOS🌟*: 3🏆
🔹 *Trophées*: 3🏆
🔹 *Nombre de victoires*: 80✅ 
🔹 *Récompenses*: 1.000.000🧭+🎁+40🔷
🥇 *LEGENDE✨* : GRADE S ⭐⭐⭐⭐
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🔹 *Nombre de victoires*: 60✅ 
🔹 *Récompenses*: 600.000🧭+🎁+30🔷
🥈 *SUPERSTAR💫* : GRADE A ⭐⭐⭐
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🔹 *Nombre de victoires*: 40✅
🔹 *Récompenses*: 400.000🧭+20🔷
🥈 *RISING STAR🌟* : GRADE B ⭐⭐
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🔹 *Nombre de victoires*: 20✅
🔹 *Récompenses*: 200.000🧭+10🔷
🥉 *STAR⭐* : GRADE C
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                          🔷𝗡Ξ𝗢🔝`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'trade',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/81b96c35da78c1ebe8b9e.jpg';
            const msg = `▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                  *🔴🟠𝗧𝗥𝗔𝗗𝗘🔵🟢*
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🔷Afin de maintenir l'équilibre entre le nombre de joueurs dans les Divisions, désormais il n'y aura plus de transferts mais uniquement des TRADES. Donc maintenant si vous voulez acheter un joueur d'une autre division vous devez faire un échange équivalent selon ce que l'autre division accepte comme Conditions. 

Donc si vous échanger un joueur vous devez payer aussi des indemnités à la division en question:
*Joueur TOS🌟*: 2.000.000🧭
*Joueur Legends🥇*: 1.000.000🧭
*Joueur Élites🥈*: 500.000🧭 
*Joueur Novices🥉*: 250.000🧭
⚠️Vous pouvez échanger jusqu'à 2 joueurs pour faire une balance équivalente. 

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
               *🔴🟠𝗧𝗢𝗣 𝗗𝗜𝗩𝗜𝗦𝗜𝗢𝗡𝗦🔵🟢*
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Il n'est plus possible pour un joueur d'utiliser ses ressources pour contribuer dans les finances d'une division. Les vont désormais recevoir des l'argent de la ligue NSL. Les divisions gagnent des points pour les le TOP DIVISIONS RANKING:
*🏆Joueur TOW:* +10pts⬆️ + 50.000 G🧭
*🏆Jouer  TOS*: +30 pts⬆️ + 100.000 G🧭
*🏆Trophée joueur*: + 50 pts⬆️ + 300.000 G🧭
🏆 *interdivisions*: +100 pts⬆️ + 500.000 G🧭. 
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🥇1st:* + 2.000.000 G🧭
*🥈2nd:*+ 1.000.000 G🧭
*🥉3rd:*+ 500.000 G🧭
*🏵️4th:*+ 250.000 G🧭
Les fonds G🧭 peuvent être utilisés pour renforcer les joueurs de la division avec des Cards de combat pour ALL STARS uniquement. 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                      🔷𝗡Ξ𝗢🔝`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

/*zokou(
    {
        nomCom: 'extra',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (arg[0] === 'draft🔷')  {
            const lien = 'https://telegra.ph/file/bfd52371074158ab34a18.jpg';
            const msg = `🔷Afin de rendre la Draft plus équitable les Divisions ayant moins de joueurs actifs ont la priorité sur la Draft. Donc doivent impérativement Drafter et les Divisions ayant le plus de joueurs actifs allons de 4 à 5 sur une saison avec plus de 3/5 combats peuvent passer le tour où sont moins prioritaires afin que toutes les divisions aient au moins 4 joueurs actifs sûrs et au fur et à mesure des nouvelles drafts les joueurs vont se fideliser. Une division qui passe un tour est prioritaire sur la Draft du prochain tour. 

🔷Maintenant les Divisions peuvent décider de Drafter où non ! Ne pas Drafter permets aussi d'économiser de l'argent et de la place, car le quota pour une division est de 10 joueurs actifs par Divisions avant d'augmenter après avoir équilibrer entre les divisions.
*⚠️Si un joueur est viré(ce qui permettra à la Division de récupérer la moitié de la somme dépensée)d'une division pour inactivité non justifiée si il veut revenir il doit recommencer à zéro donc en Rookie et après avoir refait ses preuves une nouvelle division peut le drafter où alors il retourne dans sa division d'origine*

*🔷𝗧𝗿𝗮𝗱𝗲*(TRANSFERT🫱🏽‍🫲🏻) 
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Les divisions peuvent faire des transferts de joueurs en fin de saison. Cela se fait par Échange entre deux joueurs pour 50% des frais où un transfert pour 100% de frais. La somme sera déversée à la Division qui vends le joueur.
*Joueur TOS🌟*: 1.000.000🧭 + 300.000🧭 ind
*Joueur TOP 6🏆*: 500.000🧭 + 100.000🧭 ind
*Joueur en dessous*: 100.000🧭
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                      *🔷NSL🏆🔝*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);*/

zokou(
    {
        nomCom: 'events',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/de20465fc86e1cc9c4341.jpg';
            const msg = `*🥳ÉVÉNEMENTS NEO🎊🪄🎁*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
NEOverse a au total 2 Événements où festivals notables que nous célébrons... C'est le moment parfait pour obtenir des récompenses spéciales🎉😄. 

*🌟💙NEOVersary🎉🎆🎊*
C'est le festival de l'anniversaire de NEOverse avec pour jour iconique le *NEO FRIDAY* car le vendredi est un jour spécial pour NEOverse vu que la communauté est née un vendredi. 🎊Ce Festival debute deux fois la saison et dure du Vendredi à Dimanche lorsque nous atteignons *5️⃣0️⃣* et *1️⃣0️⃣0️⃣* matchs classés la saison. 

😄🎊: Pendant le NEOversary:
 🔷🛒Tous les articles à la boutique sont en promotion de -30%🥳 de réduction sur le prix pour les joueurs à 5 matchs minimum. 
🔷Les joueurs à 5 matchs+ minimum reçoivent une box🎁 Gratuite. 
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
L'autre événement majeur c'est les NEO GOLDEN AWARDS💫, chaques 26-28 du mois, mais il y'a aussi le QUIZZ FESTIVAL❓🥳. Un mini tournois de 8 participants qui s'affrontent en éliminations directes sur deux manches le premier à 2-0 passe au tour suivant. La récompense finale est de 500.000🧭 et +30 NC🔷. 

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔                                
                                *🔷NEO🔝*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);


zokou(
    {
        nomCom: 'duel',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
           // const lien = '';
            const msg = `*🆚𝗩𝗘𝗥𝗦𝗨𝗦 𝗔𝗥𝗘𝗡𝗔 𝗕𝗔𝗧𝗧𝗟𝗘🏆🎮*       
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🔷   *Joueur 1*: 🫀:100%  🌀:100% ❤️:100%            
                                   ~  *🆚*  ~
🔷  *Joueur 2*: 🫀:100%  🌀:100% ❤️:100%:.                            
 ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
 *🌍𝐀𝐫𝐞̀𝐧𝐞*: 
 *🚫𝐇𝐚𝐧𝐝𝐢𝐜𝐚𝐩𝐞*: Boost 1 fois chaques 2 tours! 
 *⚖️𝐒𝐭𝐚𝐭𝐬*: 
 *🏞️ 𝐀𝐢𝐫 𝐝𝐞 𝐜𝐨𝐦𝐛𝐚𝐭*: 50m max
 *🦶🏼𝐃𝐢𝐬𝐭𝐚𝐧𝐜𝐞 𝐢𝐧𝐢𝐭𝐢𝐚𝐥𝐞*📌: 5m
 *⌚𝐋𝐚𝐭𝐞𝐧𝐜𝐞*: 6mins+ 1⚠️
 *⭕𝐏𝐨𝐫𝐭𝐞́𝐞*:  10m
 *🌍𝐄𝐧𝐯𝐢𝐫𝐨𝐧𝐧𝐞𝐦𝐞𝐧𝐭*: 
 ░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🆚 *CONDITIONS DE VICTOIRES*:
▪Easy,Negs diff✅: 2️⃣-0️⃣, +70%🫀,100%❤️
▪ Mid Diff✅: 1️⃣-0️⃣, 50%🫀, - 100%❤️
▪High Extreme Diff✅: 2️⃣-1️⃣, - 60%❤️
✅ *Bon pavé*: immersion, dialogue, jeu de rôle 
*⚠️Les Boost et déplacements offensifs  ne sont pas pris en compte, seulement les esquives et les déplacements défensifs*

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
  *⚠️Vous avez 8️⃣ tours max pour finir votre Adversaire! Sinon la victoire sera donnée par décision selon celui qui a dominer le combat où qui a été le plus à l'offensive !*`;
    // zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   repondre(msg);
        }
    }
);


zokou(
    {
        nomCom: 'pave',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
           // const lien = '';
            const msg = ` .                     *🔷𝗧𝗘𝗫𝗧𝖦𝖠𝖬𝖨𝖭𝖦🎮*
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                         *🌍Distance*: 5m
          

💬🎧𝗖𝗵𝗮𝘁:
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
> 🔷
   

░░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                           *🔷𝗡Ξ𝗢🔝*`;
           // zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   repondre(msg);
        }
    }
);

/*zokou(
    {
        nomCom: 'menuoptions',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
           const msg = `+menuNeo🔷
+Rankings🔷
+calendar🔷
+trade🔷
+Recompenses🎁
+SeasonPass🔷
+tournois🏆
+Events🎊
+Records🔷
+champions🏆
+MNVP⭐
+saison UF🥅
+saison NBA🏀
+Tos⭐
+Duel
+Pave`;
            repondre(msg);
        }
    }
);

zokou(
    {
        nomCom: '',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = '';
            const msg = ``;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);*/

