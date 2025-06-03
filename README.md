# 🎬 MovieApp
Um aplicativo de catálogo e resenhas de filmes desenvolvido em React Native com integração ao Firebase. Permite que usuários pesquisem filmes, publiquem resenhas e visualizem seus próprios posts.



# 🚀 Funcionalidades
  🔍 Buscar filmes por título e ano (API de filmes).

  📝 Criar posts com comentários sobre filmes.

  🖼️ Exibir capa/poster do filme junto com a resenha.

  👥 Autenticação de usuários (Firebase Auth).

  🔥 Armazenamento de posts (Firebase Firestore).

  👤 Listagem dos seus próprios posts.

# 🛠️ Tecnologias Utilizadas
  React Native (Expo)

  Firebase (Auth, Firestore, Storage)

  AsyncStorage (Armazenamento local)

  API OMDb (Busca de filmes)

  React Navigation (Navegação entre telas)

# 📦 Instalação
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/Kaue2/movieapp.git
Acesse o diretório do projeto:

bash
Copiar
Editar
cd movieapp
Instale as dependências:

bash
Copiar
Editar
npm install
# ou
yarn install
Configure suas credenciais do Firebase em um arquivo .env ou diretamente no projeto.

Inicie o projeto:

bash
Copiar
Editar
npx expo start
# 🔑 Configuração do Firebase
Crie um projeto no Firebase Console.

Ative Authentication (Email/Senha ou outro método que preferir).

Ative o Firestore Database no modo teste ou com regras específicas.

Configure o Firebase no seu projeto React Native, criando um arquivo firebase.js:

javascript
Copiar
Editar
// Exemplo de configuração
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'SUA_API_KEY',
  authDomain: 'SEU_AUTH_DOMAIN',
  projectId: 'SEU_PROJECT_ID',
  storageBucket: 'SEU_STORAGE_BUCKET',
  messagingSenderId: 'SEU_MESSAGING_SENDER_ID',
  appId: 'SEU_APP_ID',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
# 📸 Screenshots
Tela de Posts	Tela de Novo Post	Tela de Login

# 🧠 Ideias futuras
💬 Curtidas e comentários em posts.

🌟 Sistema de favoritos.

🎨 Melhorias na interface (UI/UX).

🔐 Implementar autenticação com Google/Facebook.

📈 Tela de estatísticas (filmes mais comentados, usuários ativos).

# 🤝 Contribuição
Sinta-se livre para abrir issues ou enviar pull requests. Toda ajuda é bem-vinda!

Fork o projeto

Crie sua branch (git checkout -b feature/NomeDaFeature)

Commit suas alterações (git commit -m 'Adiciona nova feature')

Push na sua branch (git push origin feature/NomeDaFeature)

Abra um Pull Request

# 🧑‍💻 Autor
Kauê dos Anjos

# 📝 Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais informações.
