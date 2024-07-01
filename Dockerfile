FROM node:16
RUN git clone https://github.com/Nignanfatao/neoverse_md /root/neobot
WORKDIR /root/neobot
#RUN npm install
EXPOSE 3000
CMD ["npm","neoverse" ]
