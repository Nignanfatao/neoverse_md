const { zokou } = require('../framework/zokou');

zokou(
    {
        nomCom: 'menu_',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (arg[0] === 'Neo🔷')  {
            const lien = 'https://telegra.ph/file/fa6999ab2d76e26cac779.jpg';
            const msg = `.                        🔷𝗡Ξ𝗢 MENU
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Bienvenue dans le menu principal de NEOverse🔷,Pour tout savoir sur l'univers NEO🙂:

👉🏻 +Guide Saison🔷
👉🏻 +Records🏆
👉🏻 +Calendrier🔷
👉🏻 +Rankings🔷
👉🏻 +Draft🔷
👉🏻 +Évènements🎉

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                 *🔷NSL🏆*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'guide',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (arg[0] === 'Saison🔷')  {
            const lien = 'https://telegra.ph/file/349811ed350ef785b8150.mp4';
            const msg = `🔷░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎮MATCH UP*: 
Désormais la ligue organise des matchs up  entre des joueurs par affinités(classement, rivalité, défi...). Les matchs up seront programmés pour les prochaines 48h, un joueur peut lancer un défi à un autre joueur et pour refuser un défi vous pouvez utiliser 10🔷, sinon vous êtes obligé de faire ce match avant de faire une autre activité sinon amende et sanction. Celui qui a proposé peut continuer ses activités en attendant. En évitant le défi c'est un Forfait et ne pas se présenter est une amende de 500.000🧭.

*🎖️RANKING MATCH*
Vous pouvez defier un joueur haut placé pour un Rang ainsi vous gagnez le même nombre de pts que lui en cas de victoire, mais cela coûte 10🔷Vous pouvez donc facilement passer devant un joueur pour prendre sa place dans la saison. *⚠️Uniquement pour les joueurs avec 5 matchs minimum la saison*. 


📊 *PROMO/RELEGATION⬆️⬇️🏆*
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
À la fin de la saison les TOP 3🏆 avec minimum 5 combats sont promus en classe supérieure et les 3 derniers sont relégués. 

⚠️  En cas de relégation vous perdez donc l'utilisation de certains Cards à cause de la classe. Si vous êtes off pendant une saison votre fiche sera gelée et si vous devez vous absenté il faut prévenir la ligue car les joueurs avec 0 activité la saison seront relégués en perdant 50% de tout ce qu'ils possèdent avec une amende de 500.000🧭. 
⚠️En quittant sans prévenir vous serez entièrement effacé des mémoires de la ligue comme si vous n'aviez jamais exister, Si vous perdez le contrôle et quitter sur un coût de tête vos chances de revenir un jour seront de 1% et aussi au cas où nous vous laissons revenir c'est sans fiche
═══════════
👉🏻 +Recompenses🎁
👉🏻 +Tournois🏆
👉🏼 +NEO Golden Awards💫 
👉🏼 +Saison UF🥅
👉🏼 +Saison NBA🏀
👉🏻 +Saison Elysium💠

░░░░░░░░░░░░░░░
                                  
                                    *🔷NSL🏆🔝*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'recompenses🎁',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/6f93a87fef6949007038a.mp4';
            const msg = `*🔷𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗲𝘀 𝗳𝗶𝗻 𝗱𝗲 𝘀𝗮𝗶𝘀𝗼𝗻🎁🎊*:
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏆 Les Top 3 de chaques classes et le meilleur rookie seront les ALL STARS de la prestigieuse *TOS🌟* Team of the Season,minimum 5 victoires pour y figurer et percevoir les Récompenses. 

🥇LÉGENDS🏆:
1️⃣🥇:1.000.000🧭+100🔷+🎁+100🎟️
2️⃣🥈: 800.000🧭+50🔷+🎁+50🎟️
3️⃣🥉: 600.000🧭+20🔷+🎁+20🎟️

🥈ELITES🏆
1️⃣🥇: 800.000🧭+50🔷+🎁+50🎟️
2️⃣🥈: 600.000🧭+25🔷+🎁+20🎟️
3️⃣🥉: 400.000🧭+10🔷+10🎟️

🥉NOVICES🏆
1️⃣🥇: 600.000🧭+20🔷+🎁+20🎟️
2️⃣🥈: 400.000🧭+10🔷+10🎟️
3️⃣🥉: 600.000🧭

🏵️ROOKIES
1️⃣🥇:200.000🧭+5🔷+5🎟️

*🔷𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗲𝘀 𝗱𝗲 𝗹𝗮 𝘀𝗲𝗺𝗮𝗶𝗻𝗲🎁🎊*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Weekly ranking, TOW💙, Team of the week:
🔹 *Weekly Player*:100.000🧭+5🔷
🔹 *TOW Top 3*: 50.000🧭
⚠️Récompense 🔷 avec minimum 3 victoires la semaine. 

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                            *🔷NSL🏆🔝*`;
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
            const lien = 'https://telegra.ph/file/04f9dd52ba2cc2d96a9de.jpg';
            const msg = `🔷░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Nous avons 3 tournois majeurs en NSL🏆en dehors de la saison régulière: *Le NEO TOUR EVO💠, LE GRAND SLAM💢 et L'inter divisions CUP🛡️*. 

*🏆NEO TOUR EVO💠*
▔▔▔▔▔▔▔▔▔▔▔▔
L'une des compétitions majeures de la NSL, regroupant 8 joueurs en éliminations directes sur un match. 
🎖️ : 1.000.000🧭+50🔷+🎁🥈+30🎟️

*🏆Le GRAND SLAM💢*
▔▔▔▔▔▔▔▔▔▔▔▔
La deuxième grande compétition de la NSL avec des matchs aller retour en 2 manches pour un score de *2-0* ce qui est un swipe. Les TOP 2 de toutes les classes sont les qualifiés pour le GS. 
🎖️ : 1.000.000🧭+50🔷+🎁🥈+30🎟️

*🛡️𝗜𝗻𝘁𝗲𝗿𝗱𝗶𝘃𝗶𝘀𝗶𝗼𝗻𝘀 𝗖𝘂𝗽🏆*
▔▔▔▔▔▔▔▔▔▔▔▔
Les divisions s'affrontent en alignant leurs joueurs pour représenter la Division. Seulement 2 joueurs max, les combats se font en 1 vs 1 pour un total de 2 victoires, si une division gagne déjà 2-0 c'est un *Swipe* qualifiée pour le tour suivant mais si 1-1, un 3e match.
🎖️ *WIN*: 1.000.000🧭+100🛡️ 

*⚠️Règlement des tournois*
▔▔▔▔▔▔▔▔▔▔▔▔
Après avoir été inscrit ne pas se présenter le jour du match sera considéré comme un forfait et une amende de 500 à 1.000.000🧭 et aussi la moitié des NC🔷 et privé de la prochaine édition. Le Bonus de participation au tournoi après un match est de 10🎟️ et à chaque victoire en tournoi vous gagner +5🎟️. 

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                *🔷NSL🏆🔝*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
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

zokou(
    {
        nomCom: 'saison',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (arg[0] === 'UF🥅')  {
            const lien = 'https://telegra.ph/file/00ba3eadccf8f3f47617c.jpg';
            const msg = ` *𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝘂𝗲 𝗱𝗮𝗻𝘀 𝗹𝗮 𝘀𝗮𝗶𝘀𝗼𝗻 𝗨𝗙🥅*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Lors de la saison UF, les équipes sont séparées en deux ligues...la Divisions Stars et la division Novices, nous viserons 3 ligues si y'a plus de joueurs. Les 6 premiers de la division ONE vont se qualifier pour la ligue des champions et les 2 premiers de la Division SECOND aussi. 

*𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗲𝘀 𝗠𝗔𝗧𝗖𝗛𝗦🥅*
Nous avons opter pour une saison à quota de matchs par joueurs. Tous les joueurs ont 10 matchs maximum la saison mais vous devez affronter tous les joueurs de votre division et vous ne pouvez pas affronter le même adversaire plus de 2 fois la partie de la saison et la ligue organisera des matchs pour certains joueurs en forme. 

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
            const lien = 'https://telegra.ph/file/74b24368196d19f87e460.jpg';
            const msg = `*𝗕𝗶𝗲𝗻𝘃𝗲𝗻𝘂𝗲 𝗱𝗮𝗻𝘀 𝗹𝗮 𝘀𝗮𝗶𝘀𝗼𝗻 NBA🏀*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Lors de la saison NBA, les équipes sont séparées en deux Conférences...la conférence WEST🔴 et la conférence EAST🔵 . Les 8 premiers de chaques conferences joueront les PLAYOFFS mais dans un debut nous allons faire un championnat combiné 🔴WEST/EAST🔵 et les 8 premiers seront aux playoffs les. 

*𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗲𝘀 𝗠𝗔𝗧𝗖𝗛𝗦🏀*
Nous avons opter pour une saison à quota de matchs par joueurs. Tous les joueurs ont 10 matchs maximum la saison mais vous devez affronter tous les joueurs de votre division et vous ne pouvez pas affronter le même adversaire plus de 2 fois la partie de la saison et la ligue organisera des matchs pour certains joueurs en forme. 

⚽Pour 5 matchs:  5.000.000 $
⚽Pour 5 victoires: 25.000.000 $ + 10 NBC⭕
⚽Pour 10 matchs: 10.000.000 $ + 5 NBC⭕
⚽Pour 10 victoires: 50.000.000 $ + 50 NBC⭕

*𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗲𝘀 𝗳𝗶𝗻 𝗱𝗲 𝗦𝗮𝗶𝘀𝗼𝗻🏀🎁*
🎖️Top 1: +100M$ + 70 NBC⭕+100🔷+50🎟️
🥈 Top 3: 50M$ + 30 NBC⭕+50🔷+20🎟️
🥉 Top 6: 20M$ + 10 NBC⭕+20🔷+10🎟️
🏆Finals: 100M$ + 90 NBC⭕+100🔷+50🎟️

*⚠️Récompenses avec minimum 5 matchs*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                     *NBA2K🏀NE⭕*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
    } else (arg[0] === 'Elysium💠')  {
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
   
        }
    });


zokou(
    {
        nomCom: 'records🏆',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/8370fd4da3413d1e629f8.jpg';
            const msg = `. 
           ══════༺༻═══
            ⚜️ ''' 𝐋𝐈𝐕𝐑𝐄𝐒 𝐃'𝐇𝐈𝐒𝐓𝐎𝐈𝐑𝐄 '''⚜️
           ═════ ༺༻═══
Voici les pantheons du Nouveau monde, le livre des performances mémorables et légendaires  du nouveau monde ! ceux qui ont écrit leurs noms dans parmi les Astres et les plus grands à tout jamais dans le nouveau monde. 

*🔸+Champions 🏆*
*🔸+MNVP🌟*
*🔸+TOS⭐* 
*🔸+Awards 💫*
 ══════༺༻═══
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                  *🔶𝗡Ξ𝗢💫*`;
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
            const lien = 'https://telegra.ph/file/8370fd4da3413d1e629f8.jpg';
            const msg = `. 
                    
                 ══════༺༻═══
                         🏆 ''' 𝐂𝐇𝐀𝐌𝐏𝐈𝐎𝐍𝐒 ''' 🏆
                 ══════༺༻═══
                  
Voici le panthéon des Champions du Nouveau monde✨🏆ceux qui ont un déjà rempoter un tournoi à NEOverse ! NEO TOUR EVO et GRAND SLAM. 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔

🔸🔴NEO KÏNGS⚜️🇨🇬:       🏆 
🔸🔵ABA L. KÏNGS⚜️🇸🇳:   🏆
🔸🟠Gentleman🇸🇳:              🏆
🔸🔴Tecraso Marc🇨🇲:         🏆
🔸🔴Lily KÏNGS⚜️🇨🇬:         🏆🏆🏆
🔸🔴Damian KÏNGS⚜️🇨🇬 : 🏆🏆
🔸🔵Vanitas KÏNGS⚜️🇸🇳:  🏆




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
        nomCom: 'mnvp🌟',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/8370fd4da3413d1e629f8.jpg';
            const msg = `. 
                   ══════༺༻═══
      💫 ''' 𝐌𝐎𝐒𝐓 𝐍𝐄𝐎 𝐕𝐀𝐋𝐔𝐀𝐁𝐋𝐄 𝐏𝐋𝐀𝐘𝐄𝐑 ''' 💫
                      ═════ ༺༻═══

Récompense prestigieuse *TOS*⭐ désignant les MNVP, les meilleurs joueurs de la saison régulière, les TOP1🏆
*⚠️Notez que vous pouvez prendre votre retraite de NEOverse avec les Honneurs donc une décoration ! Mais si vous quittez en fantôme où entacher votre image vis à vis de la ligue vous perdez votre nom dans le Panthéon d'honneur.* 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏆 *LEGENDS🥇*: ⭐⭐⭐ (Niveau Extrême) 
🔸Lily KÏNGS⚜️🇨🇬:                  2🌟
🔸Damian KÏNGS⚜️🇨🇬:          4🌟

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏆 *ELITES🥈*: ⭐⭐ (Niveau moyen) 
🔸Adam GENESIS🇨🇮:              1🌟
🔸Vanitas KÏNGS⚜️🇸🇳:          1🌟
🔸Grimm Tempest🇨🇲:             1🌟

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🏆 *NOVICES🥉*: ⭐(Niveau facile) 
🔸Hajime NEXUS🇨🇲:                1🌟
🔸Kemael🇨🇮:                             1🌟
🔸White KÏNGS⚜️🇨🇮:              1🌟 
🔸Abdiel🇹🇬:                               1🌟



        

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
            const lien = 'https://telegra.ph/file/8370fd4da3413d1e629f8.jpg';
            const msg = `. 
                  ══════༺༻═══
                        🌟𝗧𝗢𝗦: 𝐀𝐋𝐋 𝐒𝐓𝐀𝐑𝐒🌟
                   ═════ ༺༻═══
Voici la catégorie des SUPERSTARS du nouveau monde, ceux qui ont déjà été dans la  *TOS* TEAM OF THE SEASON⭐,la team prestige 🎖️. 
*⚠️Notez que vous pouvez prendre votre retraite de NEOverse avec les Honneurs donc une décoration ! Mais si vous quittez en fantôme où entacher votre image vis à vis de la ligue vous perdez votre nom dans le Panthéon d'honneur.* 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*⭐Lily KÏNGS⚜️🇨🇬*:             6⭐
*⭐Damian  KÏNGS⚜️🇨🇬*:    6⭐
*⭐Hajime NEXUS🇨🇲*:           1⭐
*⭐Aether GENESIS🇬🇦*:        1⭐ 
*⭐White KÏNGS⚜️🇨🇮*:         3⭐ 
*⭐Atsushi KÏNGS⚜️🇨🇲*:     2⭐ 
*⭐Adam GENESIS🇨🇮*:         1⭐ 
*⭐Goldy Shogun🇹🇬*:            1⭐ 
*⭐Kemael🇨🇮*:                        1⭐
*⭐Grimm Tempest🇨🇲*:        1⭐ 
*⭐Abdiel🇹🇬*:                          1⭐ 
*⭐Thanatos Gold King🇧🇫*:  1⭐ 


░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                   🔶𝗡Ξ𝗢☀️`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
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

zokou(
    {
        nomCom: 'calendrier🔷',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/b72688931621648efe227.jpg';
            const msg = `*🔷CALENDRIER📅*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🔷Nous évoluons avec des saisons altérées mixtes ! Donc si c'est la saison NBA nous aurons une semaine de matchs NBA plus une semaine de combats ALL STARS. C'est donc un mixte entre le mois NBA et le Mois UF,Elysium et ALL STARS ne bougeront pas ce qui fait que nous auront 2 semaines pour chaques jeux... Si c'est la semaine UF pas de ALL STARS et NBA cette semaine. 


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
                    *🔷NSL🏆🔝*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'rankings🔷',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/bfd52371074158ab34a18.jpg';
            const msg = `*𝗥𝗔𝗡𝗞𝗜𝗡𝗚S🔰 𝗡𝗘𝗢🏆*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🥇 *HOF 🌠* : Special Grade S+ ⭐⭐⭐
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🔹 *TOS🌟*: 6🏆
🔹 *Trophées*: 3🏆
🔹 *Nombre de victoires*: +100✅
🎁🎉 : +1M🧭+50🔷+50🎟️+50🔸+🎁🥈🎫


🥈 *LEGENDE✨* : Grade S ⭐⭐
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🔹 *TOS🌟*: 3🏆
🔹 *Trophées*: 1🏆
🔹 *Nombre de victoires*: 100✅ 
🎁🎉 : +1M🧭+50🔷+50🎟️+50🔸+🎁🥈🎫

🥈 *SUPERSTAR💫* : Grade A ⭐
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🔹 *TOS🌟*: 1🏆
🔹 *Nombre de victoires*: 70✅ 
🎁🎉 : +1M🧭+50🔷+50🎟️+50🔸+🎁🥈🎫


🥈 *RISING STAR🌟* : Grade B 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
🔹 *Nombre de victoires*: 40✅
🎁🎉 : +1M🧭+50🔷+50🎟️+50🔸+🎁🥈🎫

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                          *🔷NSL🏆🔝*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
    {
        nomCom: 'draft🔷',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/bfd52371074158ab34a18.jpg';
            const msg = `*🎓𝗗𝗲𝗿𝗼𝘂𝗹𝗲𝗺𝗲𝗻𝘁 𝗱𝗲 𝗹𝗮 𝗱𝗿𝗮𝗳𝘁*
🔷Lors de la Draft les meilleures divisions ont les meilleurs  privilèges de Draft selon leurs classement sur le divisions Ranking. Donc une division qui a le choix paye la moitié 50%. 

💎 Best choix: 800.000🧭 (1st Division choix) 
🥇 Bon choix: 500.000🧭(2nd Division choix)  
🥈 Moyen choix: 250.000🧭  
🥉 Pire choix: 100.000🧭 

*🔷NB:* ⚠️Si une division veut drafter un joueur qui n'est pas de leurs positions au classement, ils doivent payer aussi le choix de la division qui est censée avoir le joueur de 50% si il n'ya pas de *bras de fer⚖️*
Au cas où deux où plusieurs Divisions sont intéressées par un même joueur c'est *le bras de fer* où *Les enchères⚖️* la division qui propose plus gagne ! Mais pour se positionner aux enchères vous devez d'abord placer la moitié de la somme du choix et les prix proposés partent de 20.000🧭, donc de 20 en 20.
*⚠️Si une division décide de faire un transfert en fin de saison, donc pas de Draft sur ce tour.*

*+Extra Draft🔷* (👈🏼) 
*+Welcome💙* (👈🏼 Rookies) 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                                *🔷NSL🏆🔝*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

zokou(
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
);

zokou(
    {
        nomCom: 'evenements🎉',
        categorie: 'NEOverse'
    },
    async (dest, zk, commandeOptions) => {
        const { repondre, arg, ms } = commandeOptions;

        if (!arg || arg.length === 0)  {
            const lien = 'https://telegra.ph/file/c138f52648b66df87e951.jpg';
            const msg = `*🥳ÉVÉNEMENTS NEO🎊🪄🎁*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
NEOverse a au total 2 Événements où festivals notables que nous célébrons... C'est le moment parfait pour obtenir des récompenses spéciales🎉😄. 

*🌟💙NEOVersary🎉🎆🎊*
C'est le festival de l'anniversaire de NEOverse avec pour jour iconique le *NEO FRIDAY* car le vendredi est un jour spécial pour NEOverse vu que la communauté est née un vendredi. 🎊Ce Festival debute deux fois la saison et dure du Vendredi à Dimanche lorsque nous atteignons *5️⃣0️⃣* et *1️⃣0️⃣0️⃣* matchs classés la saison. 

😄🎊: Pendant le NEOversary:
 🔷🛒Tous les articles à la boutique sont en promotion de -30%🥳 de réduction sur le prix pour les joueurs à 5 matchs minimum. 
🔷Les joueurs à 5 matchs+ minimum reçoivent une box🎁 de 500.000🧭+20NC🔷. 
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
L'autre événement majeur c'est les NEO GOLDEN AWARDS💫, chaques 26-28 du mois, mais il y'a aussi le QUIZZ FESTIVAL❓🥳. Un mini tournois de 8 participants qui s'affrontent en éliminations directes sur deux manches le premier à 2-0 passe au tour suivant. La récompense finale est de 500.000🧭 et +30 NC🔷. 

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔                                
                                *🔷NSL🏆🔝*`;
            zk.sendMessage(dest, { image: { url: lien }, caption: msg }, { quoted: ms });
   
        }
    }
);

/*zokou(
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

