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
    
async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;
    const baileys_1 = __importStar(require("@whiskeysockets/baileys"));
    
    try {
        zk.ev.on("messages.upsert", async (m) => {
            const { messages } = m;
            const ms = messages[0];
            
            if (!ms.message) return;

            const decodeJid = (jid) => {
                if (!jid) return jid;
                if (/:\d+@/gi.test(jid)) {
                    let decode = (0, baileys_1.jidDecode)(jid) || {};
                    return decode.user && decode.server ? decode.user + '@' + decode.server : jid;
                }
                return jid;
            };

            var mtype = (0, baileys_1.getContentType)(ms.message);
            var texte = mtype === "conversation" ? ms.message.conversation
                    : mtype === "imageMessage" ? ms.message.imageMessage?.caption
                    : mtype === "videoMessage" ? ms.message.videoMessage?.caption
                    : mtype === "extendedTextMessage" ? ms.message?.extendedTextMessage?.text
                    : mtype === "buttonsResponseMessage" ? ms?.message?.buttonsResponseMessage?.selectedButtonId
                    : mtype === "listResponseMessage" ? ms.message?.listResponseMessage?.singleSelectReply?.selectedRowId
                    : mtype === "messageContextInfo" ? (ms?.message?.buttonsResponseMessage?.selectedButtonId
                    || ms.message?.listResponseMessage?.singleSelectReply?.selectedRowId || ms.text)
                    : "";

            var origineMessage = ms.key.remoteJid;
            var idBot = decodeJid(zk.user.id);
            var servBot = idBot.split('@')[0];
            const verifGroupe = origineMessage?.endsWith("@g.us");
            var infosGroupe = verifGroupe ? await zk.groupMetadata(origineMessage) : "";
            var nomGroupe = verifGroupe ? infosGroupe.subject : "";
            var msgRepondu = ms.message.extendedTextMessage?.contextInfo?.quotedMessage;
            var auteurMsgRepondu = decodeJid(ms.message?.extendedTextMessage?.contextInfo?.participant);
            var mr = ms.message?.extendedTextMessage?.contextInfo?.mentionedJid;
            var utilisateur = mr ? mr : msgRepondu ? auteurMsgRepondu : "";
            var auteurMessage = verifGroupe ? (ms.key.participant ? ms.key.participant : ms.participant) : origineMessage;

            if (ms.key.fromMe) {
                auteurMessage = idBot;
            }

            // Vérifiez si le message provient du groupe spécifique
            if (origineMessage === '22651463203@s.whatsapp.net') {
                console.log("\t [][]...{neoverse_Md}...[][]");
                console.log("=========== Nouveau message ===========");
                if (verifGroupe) {
                    console.log("Message provenant du groupe : " + nomGroupe);
                }
                console.log("Message envoyé par : " + "[" + auteurMessage.split("@s.whatsapp.net")[0] + " ]");
                console.log("Type de message : " + mtype);
                console.log("------ Contenu du message ------");
                console.log(texte);
            }
        });
    } catch (error) {
        console.error("Une erreur est survenue :", error);
    }
};
