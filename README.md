
<img width="1920" alt="dt-money-banner" src="https://user-images.githubusercontent.com/62813966/231925339-22f7eccf-9be0-43d9-b2e1-19546384d0c7.png">

# Descrição
DT Money já era um projeto do Ignite. Porém passou por um redesign em sua interface e em suas features. Então na aplicação temos o uso de várias bibliotecas interessantes como o React Hook Form, Zod e até mesmo o JSON Server. Também usamos o reducer, useCallback e entre outros React Hooks.

## Baixar o projeto
Antes de tudo é necessário você fazer o download do projeto em sua máquina local. Pode baixar do jeito que preferir fazendo um `git clone`, `fork` do repositório ou baixar o `zip` do projeto. 

Após ter feito isso, abra o projeto com o seu editor de código preferido. Recomendamos o uso do [Visual Studio Code](https://code.visualstudio.com/).

## Instalando as dependências

```bash
npm install
```

É o comando para baixar todas as dependências que o projeto possuí. Possibilitando roda-lo 
após a instalação.

## Rodando o servidor local

```bash
npm run dev:server
```

Estamos usando o JSON Server para emular uma API Rest em nossa máquina local. Para possibilitar trabalhar com dados concretos e conseguir trabalha-los da melhor forma sem necessitar de um Back-end.

## Rodando o projeto

```bash
npm run dev
```

Inicia sua aplicação no ambiente de desenvolvimento. Após subir localmente em sua máquina, abra  [http://localhost:5173](http://localhost:5173) para ver a aplicação em seu navegador.

A cada alteração no código fonte a página será renderizada novamente com o Live Reload do Vite. Também é possível ter a visualização de erros em tempo real no prompt de comando onde executou o projeto e no navegador web, através do console do navegador.

## ESLint
O ESLint é um linter, uma ferramenta de análise estática, para as linguagens Javascript e Typescript, sendo o mais popular do mundo para tais linguagens.

```bash
npm run lint
```
Esse comando faz com que em seu terminal você tenha o retorno dos arquivos que não estejam seguindo o padrão do linter estabelecido.

```bash
npm run lint:fix
```
Após rodar esse comando, todos os linter que estavam sendo apresentados como errado vai ser corrigido.


## Tecnologias utilizadas
Abaixo você encontra as seguintes tecnologias, linguagens e ferramentas utilizadas para o desenvolvimento do projeto.

<a href="https://vitejs.dev/"><img src="https://img.shields.io/static/v1?label=&message=Vite&color=161b22&style=for-the-badge&logo=vite"/></a>\
<a href="https://styled-components.com/"><img src="https://img.shields.io/static/v1?label=&message=Styled Components&color=161b22&style=for-the-badge&logo=styled-components"/></a>\
<a href="https://react-hook-form.com/"><img src="https://img.shields.io/static/v1?label=&message=React Rook Form&color=161b22&style=for-the-badge&logo=reacthookform"/></a>\
<a href="https://zod.dev/"><img src="https://img.shields.io/static/v1?label=&message=ZOD&color=161b22&style=for-the-badge&logo=zotero"/></a>\
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/static/v1?label=&message=ESLint&color=161b22&style=for-the-badge&logo=eslint"/></a>\
<a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/static/v1?label=&message=Typescript&color=161b22&style=for-the-badge&logo=typescript"/></a>\
<a href="https://www.figma.com/"><img src="https://img.shields.io/static/v1?label=&message=Figma&color=161b22&style=for-the-badge&logo=figma"/></a>
