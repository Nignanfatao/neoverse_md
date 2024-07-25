"use strict";
    var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }));
    var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    });
    var __importStar = (this && this.__importStar) || function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };
    var __importDefault = (this && this.__importDefault) || function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    const baileys_1 = __importStar(require("@whiskeysockets/baileys"));
    const logger_1 = __importDefault(require("@whiskeysockets/baileys/lib/Utils/logger"));
    const logger = logger_1.default.child({});
    logger.level = 'silent';
    const pino = require("pino");
    const boom_1 = require("@hapi/boom");
    const conf = require("./set");
    const axios = require("axios");
    let fs = require("fs-extra");
    let path = require("path");
    const FileType = require('file-type');
    const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
    //import chalk from 'chalk'
    const { verifierEtatJid , recupererActionJid } = require("./bdd/antilien");
    const { atbverifierEtatJid , atbrecupererActionJid } = require("./bdd/antibot");
    let evt = require(__dirname + "/framework/zokou");
    const {isUserBanned , addUserToBanList , removeUserFromBanList} = require("./bdd/banUser");
    const  {addGroupToBanList,isGroupBanned,removeGroupFromBanList} = require("./bdd/banGroup");
    const {isGroupOnlyAdmin,addGroupToOnlyAdminList,removeGroupFromOnlyAdminList} = require("./bdd/onlyAdmin");
    //const { constrainedMemory } = require("process");
    //const { co } = require("translatte/languages");
    const { recupevents } = require('./bdd/welcome');
    //const //{loadCmd}=require("/framework/mesfonctions")
    let { reagir } = require(__dirname + "/framework/app");
    var session = conf.session.replace(/Zokou-MD-WHATSAPP-BOT;;;=>/g,"");
    const prefixe = conf.PREFIXE;

 async function authentification() {
        try {
            
            //console.log("le data "+data)
            if (!fs.existsSync(__dirname + "/auth/creds.json")) {
                console.log("connexion en cour ...");
                await fs.writeFileSync(__dirname + "/auth/creds.json", atob(session), "utf8");
                //console.log(session)
            }
            else if (fs.existsSync(__dirname + "/auth/creds.json") && session != "zokk") {
                await fs.writeFileSync(__dirname + "/auth/creds.json", atob(session), "utf8");
            }
        }
        catch (e) {
            console.log("Session Invalide " + e );
            return;
        }
    }
    authentification();
    const store = (0, baileys_1.makeInMemoryStore)({
        logger: pino().child({ level: "silent", stream: "store" }),
    });
    setTimeout(() => {
        async function main() {
            const { version, isLatest } = await (0, baileys_1.fetchLatestBaileysVersion)();
            const { state, saveCreds } = await (0, baileys_1.useMultiFileAuthState)(__dirname + "/auth");
            const sockOptions = {
                version,
                logger: pino({ level: "silent" }),
                browser: ['Zokou-Md', "safari", "1.0.0"],
                printQRInTerminal: true,
                fireInitQueries: false,
                shouldSyncHistoryMessage: true,
                downloadHistory: true,
                syncFullHistory: true,
                generateHighQualityLinkPreview: true,
                markOnlineOnConnect: false,
                keepAliveIntervalMs: 30_000,
                /* auth: state*/ auth: {
                    creds: state.creds,
                    /** caching makes the store faster to send/recv messages */
                    keys: (0, baileys_1.makeCacheableSignalKeyStore)(state.keys, logger),
                },
                //////////
                getMessage: async (key) => {
                    if (store) {
                        const msg = await store.loadMessage(key.remoteJid, key.id, undefined);
                        return msg.message || undefined;
                    }
                    return {
                        conversation: 'An Error Occurred, Repeat Command!'
                    };
                }
                ///////
            };
            const zk = (0, baileys_1.default)(sockOptions);
            store.bind(zk.ev);
            setInterval(() => { store.writeToFile(__dirname + "/store.json");  }, 3000);
           
            zk.ev.on("messages.upsert", async (m) => {
                const { messages } = m;
                const ms = messages[0];
              //  console.log(ms) ;
                if (!ms.message)
                    return;
                const decodeJid = (jid) => {
                    if (!jid)
                        return jid;
                    if (/:\d+@/gi.test(jid)) {
                        let decode = (0, baileys_1.jidDecode)(jid) || {};
                        return decode.user && decode.server && decode.user + '@' + decode.server || jid;
                    }
                    else
                        return jid;
                };
                var mtype = (0, baileys_1.getContentType)(ms.message);
                var texte = mtype == "conversation" ? ms.message.conversation : mtype == "imageMessage" ? ms.message.imageMessage?.caption : mtype == "videoMessage" ? ms.message.videoMessage?.caption : mtype == "extendedTextMessage" ? ms.message?.extendedTextMessage?.text : mtype == "buttonsResponseMessage" ?
                    ms?.message?.buttonsResponseMessage?.selectedButtonId : mtype == "listResponseMessage" ?
                    ms.message?.listResponseMessage?.singleSelectReply?.selectedRowId : mtype == "messageContextInfo" ?
                    (ms?.message?.buttonsResponseMessage?.selectedButtonId || ms.message?.listResponseMessage?.singleSelectReply?.selectedRowId || ms.text) : "";
                var origineMessage = ms.key.remoteJid;
                var idBot = decodeJid(zk.user.id);
                var servBot = idBot.split('@')[0];
                /* const dj='22559763447';
                 const dj2='2250143343357';
                 const luffy='22891733300'*/
                /*  var superUser=[servBot,dj,dj2,luffy].map((s)=>s.replace(/[^0-9]/g)+"@s.whatsapp.net").includes(auteurMessage);
                  var dev =[dj,dj2,luffy].map((t)=>t.replace(/[^0-9]/g)+"@s.whatsapp.net").includes(auteurMessage);*/
                const verifGroupe = origineMessage?.endsWith("@g.us");
                var infosGroupe = verifGroupe ? await zk.groupMetadata(origineMessage) : "";
                var nomGroupe = verifGroupe ? infosGroupe.subject : "";
                var msgRepondu = ms.message.extendedTextMessage?.contextInfo?.quotedMessage;
                var auteurMsgRepondu = decodeJid(ms.message?.extendedTextMessage?.contextInfo?.participant);
                //ms.message.extendedTextMessage?.contextInfo?.mentionedJid
                // ms.message.extendedTextMessage?.contextInfo?.quotedMessage.
                var mr = ms.message?.extendedTextMessage?.contextInfo?.mentionedJid;
                var utilisateur = mr ? mr : msgRepondu ? auteurMsgRepondu : "";
                var auteurMessage = verifGroupe ? (ms.key.participant ? ms.key.participant : ms.participant) : origineMessage;
                if (ms.key.fromMe) {
                    auteurMessage = idBot;
                }
                
                var membreGroupe = verifGroupe ? ms.key.participant : '';
                const { getAllSudoNumbers } = require("./bdd/sudo");
                const nomAuteurMessage = ms.pushName;
                const dj = '22559763447';
                const dj2 = '22543343357';
                const dj3 = "22564297888";
                const luffy = '22891733300';
                const dj4 = '‪99393228‬';
                const sudo = await getAllSudoNumbers();
                const superUserNumbers = [servBot, dj, dj2, dj3,dj4, luffy, conf.NUMERO_OWNER].map((s) => s.replace(/[^0-9]/g) + "@s.whatsapp.net");
                const allAllowedNumbers = superUserNumbers.concat(sudo);
                const superUser = allAllowedNumbers.includes(auteurMessage);
                
                var dev = [dj, dj2,dj3,dj4,luffy].map((t) => t.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(auteurMessage);
                function repondre(mes) { zk.sendMessage(origineMessage, { text: mes }, { quoted: ms }); }
                console.log("\t [][]...{Zokou-Md}...[][]");
                console.log("=========== Nouveau message ===========");
                if (verifGroupe) {
                    console.log("message provenant du groupe : " + nomGroupe);
                }
                console.log("message envoyé par : " + "[" + nomAuteurMessage + " : " + auteurMessage.split("@s.whatsapp.net")[0] + " ]");
                console.log("type de message : " + mtype);
                console.log("------ contenu du message ------");
                console.log(texte);
                /**  */
                function groupeAdmin(membreGroupe) {
                    let admin = [];
                    for (m of membreGroupe) {
                        if (m.admin == null)
                            continue;
                        admin.push(m.id);
                    }
                    // else{admin= false;}
                    return admin;
                }
                
                const mbre = verifGroupe ? await infosGroupe.participants : '';
                //  const verifAdmin = verifGroupe ? await mbre.filter(v => v.admin !== null).map(v => v.id) : ''
                let admins = verifGroupe ? groupeAdmin(mbre) : '';
                const verifAdmin = verifGroupe ? admins.includes(auteurMessage) : false;
                var verifZokouAdmin = verifGroupe ? admins.includes(idBot) : false;
                /** ** */
                var etat =conf.ETAT;
                if(etat==1)
                {await zk.sendPresenceUpdate("available",origineMessage);}
                else if(etat==2)
                {await zk.sendPresenceUpdate("composing",origineMessage);}
                else if(etat==3)
                {
                await zk.sendPresenceUpdate("recording",origineMessage);
                }
                else
                {}
                /** ***** */
                const arg = texte ? texte.trim().split(/ +/).slice(1) : null;
                const verifCom = texte ? texte.startsWith(prefixe) : false;
                const com = verifCom ? texte.slice(1).trim().split(/ +/).shift().toLowerCase() : false;
               
               const liens = conf.URL.split(',');
    
    function mybotpic() {
      // Générer un indice aléatoire entre 0 (inclus) et la longueur du tableau (exclus)
      const indiceAleatoire = Math.floor(Math.random() * liens.length);
      // Récupérer le lien correspondant à l'indice aléatoire
      const lienAleatoire = liens[indiceAleatoire];
      return lienAleatoire;
    }
               
                
                var commandeOptions = {
                    superUser, dev,
                    verifGroupe,
                    mbre,
                    membreGroupe,
                    verifAdmin,
                    infosGroupe,
                    nomGroupe,
                    auteurMessage,
                    nomAuteurMessage,
                    idBot,
                    verifZokouAdmin,
                    prefixe,
                    arg,
                    repondre,
                    mtype,
                    groupeAdmin,
                    msgRepondu,
                    auteurMsgRepondu,
                    ms,
                    mybotpic
                
                };
