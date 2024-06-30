FROM node:lts-buster

# Installer les dépendances nécessaires
RUN apt-get update && \
    apt-get install -y \
    ffmpeg \
    imagemagick \
    webp && \
    apt-get upgrade -y && \
    npm i pm2 -g && \
    rm -rf /var/lib/apt/lists/*

# Cloner le dépôt GitHub
RUN git clone https://github.com/Nignanfatao/neoverse_md /root/neobot

# Définir le répertoire de travail
WORKDIR /root/neobot

# Copier le package.json et installer les dépendances
COPY package.json . 
RUN npm install -g npm@10.2.4
RUN npm install pm2 -g
#RUN npm install --legacy-peer-deps

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port utilisé par l'application
EXPOSE 8000

# Démarrer l'application avec PM2
CMD ["npm","run","neoverse"]
