 async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;
    const baileys_1 = __importStar(require("@whiskeysockets/baileys"));
    
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
           //     if(origineMessage == '120363307444088356@g.us') {
                console.log("\t [][]...{neoverse_Md}...[][]");
                console.log("=========== Nouveau message ===========");
                if (verifGroupe) {
                    console.log("message provenant du groupe : " + nomGroupe);
                }
                console.log("message envoyé par : " + "[" + nomAuteurMessage + " : " + auteurMessage.split("@s.whatsapp.net")[0] + " ]");
                console.log("type de message : " + mtype);
                console.log("------ contenu du message ------");
                console.log(texte);
              //  }
            }
                     }
