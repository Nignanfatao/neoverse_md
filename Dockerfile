# Utiliser une image Node.js LTS basée sur Debian Buster
FROM node:lts-buster

# Mettre à jour les paquets et installer les dépendances système nécessaires
RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  npm i pm2 -g && \
  rm -rf /var/lib/apt/lists/*

# Cloner le dépôt GitHub du projet
RUN git clone https://github.com/Nignanfatao/neoverse_md /root/neobot

# Définir le répertoire de travail
WORKDIR /root/neobot

# Copier les fichiers package.json et package-lock.json
COPY package.json .
COPY package-lock.json .

# Installer la version spécifiée de npm et les dépendances du projet
RUN npm install -g npm@10.2.4
RUN npm install --legacy-peer-deps

# Copier le reste des fichiers du projet
COPY . .

# Exposer le port sur lequel l'application va écouter
EXPOSE 8080

# Commande pour démarrer l'application avec pm2-runtime
CMD ["pm2-runtime", "index.js"]
