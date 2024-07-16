const { zokou } = require('../framework/zokou');
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const fs = require('fs');
const yt = require('../framework/dl/ytdl-core.js');
const ffmpeg = require('fluent-ffmpeg');
const yts1 = require('youtube-yts');

// Commande pour télécharger une chanson
zokou({
  nomCom: 'song',
  categorie: 'Recherche',
  reaction: '💿'
}, async (origineMessage, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;
  
  if (!arg[0]) {
    repondre('Veuillez entrer un terme de recherche s\'il vous plaît.');
    return;
  }

  try {
    let searchTerm = arg.join(' ');
    const searchResults = await yts(searchTerm);
    const videos = searchResults.videos;

    if (videos && videos.length > 0 && videos[0]) {
      const videoUrl = videos[0].url;
      let infoMess = {
        image: { url: videos[0].thumbnail },
        caption: `\n*nom de l'audio :* _${videos[0].title}_\n\n*Durée :* _${videos[0].timestamp}_\n*Lien :* _${videos[0].url}_\n\n_*En cours de téléchargement...*_\n\n`
      };

      zk.sendMessage(origineMessage, infoMess, { quoted: ms });

      // Obtenir le flux audio de la vidéo
      const audioStream = ytdl(videoUrl, { filter: 'audioonly', quality: 'highestaudio' });

      // Nom du fichier local pour sauvegarder le fichier audio
      const filename = 'audio.mp3';

      // Écrire le flux audio dans un fichier local
      const fileStream = fs.createWriteStream(filename);
      audioStream.pipe(fileStream);

      fileStream.on('finish', () => {
        // Envoi du fichier audio en utilisant l'URL du fichier local
        zk.sendMessage(origineMessage, { audio: { url: 'audio.mp3' }, mimetype: 'audio/mp4' }, { quoted: ms, ptt: false });
        console.log('Envoi du fichier audio terminé !');
      });

      fileStream.on('error', (error) => {
        console.error('Erreur lors de l\'écriture du fichier audio :', error);
        repondre('Une erreur est survenue lors de l\'écriture du fichier audio.');
      });
    } else {
      repondre('Aucune vidéo trouvée.');
    }
  } catch (error) {
    console.error('Erreur lors de la recherche ou du téléchargement de la vidéo :', error);
    repondre('Une erreur est survenue lors de la recherche ou du téléchargement de la vidéo.');
  }
});

// Commande pour télécharger une vidéo
zokou({
  nomCom: 'video',
  categorie: 'Recherche',
  reaction: '🎥'
}, async (origineMessage, zk, commandeOptions) => {
  const { arg, ms, repondre } = commandeOptions;
  
  if (!arg[0]) {
    repondre('Veuillez entrer un terme de recherche s\'il vous plaît.');
    return;
  }

  const searchTerm = arg.join(' ');
  try {
    const searchResults = await yts(searchTerm);
    const videos = searchResults.videos;

    if (videos && videos.length > 0 && videos[0]) {
      const videoInfo = videos[0];
      let infoMess = {
        image: { url: videos[0].thumbnail },
        caption: `*nom de la vidéo :* _${videoInfo.title}_\n*Durée :* _${videoInfo.timestamp}_\n*Lien :* _${videoInfo.url}_\n\n_*En cours de téléchargement...*_\n\n`
      };

      zk.sendMessage(origineMessage, infoMess, { quoted: ms });

      const videoDetails = await ytdl.getInfo(videoInfo.url);
      const format = ytdl.chooseFormat(videoDetails.formats, { quality: '18' });
      const videoStream = ytdl.downloadFromInfo(videoDetails, { format: format });

      const filename = 'video.mp4';
      const fileStream = fs.createWriteStream(filename);
      videoStream.pipe(fileStream);

      fileStream.on('finish', () => {
        zk.sendMessage(origineMessage, { video: { url: 'video.mp4' }, caption: '*Zokou-Md', gifPlayback: false }, { quoted: ms });
      });

      fileStream.on('error', (error) => {
        console.error('Erreur lors de l\'écriture du fichier vidéo :', error);
        repondre('Une erreur est survenue lors de l\'écriture du fichier vidéo.');
      });
    } else {
      repondre('Aucune vidéo trouvée.');
    }
  } catch (error) {
    console.error('Erreur lors de la recherche ou du téléchargement de la vidéo :', error);
    repondre('Une erreur est survenue lors de la recherche ou du téléchargement de la vidéo.');
  }
});
