
# DevRadar - Omnistack 10.0

App desenvolvido na Omnistack 10.0 da Rocketseat para cadastrar developers (baseado no perfil do Github), e depois procurar developers na mesma area do usuario. Consiste nas seguintes partes:

📡 Server. Desenvolvido com Node.js, fornece uma API conectada com o banco de dados (MongoDB) conectado con [Mongoose](https://mongoosejs.com/). Fornece a capacidade de cadastrar developers com coordenadas da localização.

🖥️ Web. Desenvolvido com ReactJS para acessar pelo navegador, fornece a capacidade de cadastrar um developer baseado na localição do usuario (do navegador) que depois serão listados na versão mobile. Funciona com Axios como modulo para fazer requisições pro server. Também faz uso do modulo [Socket.io](https://socket.io/) para o cadastro em tempo real, e a notificação na versão mobile.

📱 Mobile. Desenvolvido com React Native para acessar no celular utilizando o Expo. 

<img src="https://github.com/GuilleAngulo/developer-radar/blob/master/backend/src/devRadar.png" width="900">
