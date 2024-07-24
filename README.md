<p align="center">

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />

<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />

<img src="https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white" />

<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />

<img src="https://img.shields.io/badge/vite-purple?style=for-the-badge&logo=vite&logoColor=white" />

</p>

# 📋 Desafio Blizzard
    
## ⚙️ Configuração do projeto

Antes de executar o projeto, é necessário ter o npm e o node instalados em sua máquina.

> [!note]

> ℹ️ **Informação do sistema:**

> npm ~> v10.8.0
> node ~> v20.11.1


Após verificar ou instalar o node e o npm em sua máquina é necessário clonar o repositório com o seguinte comando:

```bash

$ git clone https://github.com/rafaeldiogo/blizzard-challenge.git
```

## 🚀 Como executar o projeto

Primeiramente é necessário instalar todas as dependências do projeto usando npm:

```bash
$ npm i
```

Para executar o projeto, em modo de desenvolvimento, use o seguinte comando:

```bash
$ npm run dev
```

## 🛠️ Como construir o projeto

Como construir o projeto:

```bash
$ npm run build
```

## 📦Estrutura de pastas

- `src/assets`: Este diretório contém as imagens e ícones utilizados na aplicação.

- `src/components`: Este diretório contém componentes reutilizáveis ​​que podem ser usados ​​em várias partes da aplicação.

- `src/context`: Este diretório contém o contexto da responsividade que será utilizado em toda a aplicação.

- `src/hooks`: Utilizado custom hook para fazer requisição dos banners, o funcionamento do modal, detectar o sistema operacional e o slider.

- `src/pages`: Componentes específicos da página serão colocados aqui.

- `src/types`: Tipos específicos para esta aplicação serão mantidos aqui.

- `src/utils`: Este diretório contém os maps dos banners e ícones que podem ser reutilizados.

- `.prettierrc`: Este diretório contém padronização do tailwind CSS ao salvar a aplicação.

## 📦 Tools

- [React](https://react.dev/) (v18.2.0)
- [Vite](https://vitejs.dev/) (v5.2.0).
- [TailwindCSS](https://tailwindcss.com/) (v3.4.3).
- [Clsx](https://www.npmjs.com/package/clsx) (v2.1.1)
- [Prettier](https://prettier.io/) (v3.3.2)
- [React-icons](https://www.npmjs.com/package/react-icons) (v5.2.1)

 ## 🚀Requisitos

 ### Nível Fácil

- Criar as seções: Menu, Banner hero, Footer.
- O texto e o ícone do botão “Baixar jogo” devem ser alterados conforme o sistema operacional do usuário que estiver acessando a página.
- Aplicar efeito de hover nas opções do menu de navegação.
- Aplicar responsividade para as seguintes resoluções: 1920px, 1440px, 768px e 375px.

### Nível Médio

- Todos os requisitos do nivel fácil.
- Criar as seções: Menu, Banner hero, Jogos Exclusivo, Footer.
- Buscar a lista de jogos via api.
- Aplicar efeito de hover nas imagens dos jogos da seção Jogos Exclusivos.
- Alterar as informações da seção Banner Hero ao selecionar uma opção no menu lateral. Os jogos disponíveis são Diablo, HearthStone e World of Warcraft.

### Nível Difícil

- Todos os requisitos do nivel fácil e médio.
- Ao clicar no botão Logar do menu de navegação, deverá ser exibido o modal de login.
- Criar componente de dropdown para as opções Jogos e Esportes do menu de navegação.
- Deverá ser executado um gif do jogo quando ocorrer o evento de hover ou click na capa do trailer.
Obs: No momento, a responsividade da aplicação está incompleta.

### Protótipo navegável

- [Protótipo Blizzard](https://www.figma.com/proto/VFXiqL35tsLArLTdDx3c0z/BR-Challenges?node-id=1-1954&starting-point-node-id=1%3A1954)