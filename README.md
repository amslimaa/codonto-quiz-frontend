# 🦷 Codonto Quiz — Web

Aplicação web do **quiz de biossegurança** do projeto Codonto (UFPI): o estudante responde perguntas, descobre seu *tipo de jogador* e vê o resultado; usuários autenticados gerenciam as perguntas (com imagem).

> API: [`codonto-quiz-backend`](https://github.com/amslimaa/codonto-quiz-backend)

## Telas

- **Logon** — autenticação
- **Main** — listagem das perguntas cadastradas
- **NewQuestion** — criação de perguntas com upload de imagem
- **Profile** — perfil do usuário
- **Quiz** — tela inicial, perguntas, escolha do tipo de jogador e tela final

## Tecnologias

React · React Router · Axios · React Icons · SweetAlert · React Reveal

## Como rodar

> Dependências da época (CRA 3/4): use **Node 16** ou defina `NODE_OPTIONS=--openssl-legacy-provider`.

```bash
npm install
npm start      # http://localhost:3000
```

O endereço da API está em `src/services/api.js`.

## Autor

Feito por [Amós Magalhães](https://github.com/amslimaa).
