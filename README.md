<div align="center">
    <h1 align=center>
    <a href="https://cubos.io/">
      <img src="readme-assets/cubos.logo.svg" /> <span>Movies<span>
     </a>
  </h1>
</div>

<div align="center">
  <h1 align=center> 
    <a href="https://www.typescriptlang.org/">
      <img src="https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555">
    </a>
    <a href="https://pt-br.reactjs.org/docs/getting-started.html">
      <img src="https://badges.aleen42.com/src/react.svg">
    </a>
    <a href="https://github.com/styled-components">
      <img src="https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components">
    </a>
    <a href="https://code.visualstudio.com/">
      <img src="https://badges.aleen42.com/src/visual_studio_code.svg">
    </a>
  </h1>
</div> 

<p align="center">
  <a href="#radio_button-projeto">Sobre o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#large_blue_circle-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#large_blue_circle-baixando-o-projeto">Baixando o Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#black_nib-observações">Observações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-pendências-técnicas">Pendências Técnicas</a>
</p>

Esta App teve como objetivo a construção de um site de busca de filmes juntamente com detalhes de ficha técnica e sinopse.

# :radio_button: Projeto:
  O **CUBOS Movies** tem como objetivo testar a capacidade técnica do desenvolvedor, nos pontos mais cruciais voltados ao ramo de _Front-end_, abordando questão de consump dados de uma API, trabalhar com responsividade, adaptando assim o site para maior parte dos dispositivos móveis. Além, é claro, de avaliar a construção do código, boas práticas, conhecimentos avançados, dentre outros.
 
## :large_blue_circle: Tecnologias
 <summary> <b> = () &rarr; : </b> </summary>
  
  #### :computer: Dependencies JSON: <i><kbd> [package.json](./package.json) </kbd></i>
  
- [x] <b>Axios:</b> <i>Usado para o tratamento do consumo dos serviços da API </i>
- [x] <b>Styled-Components:</b> <i>Como maior recurso de estilização utilizado (há presença de SASS e CSS)</i>
- [x] <b>React Icons:</b> <i>Para utilização de pacote de ícones.</i>
- [x] <b>React Router Dom:</b> <i>Para roteamento de páginas.</i>
- [x] <b>Typescript:</b> <i>Como Superset para Javascript</i>

## :large_blue_circle: Baixando o Projeto

1. É nessário possuir o **Node.js** instalado na máquina
  2. Assim como o **GIT** para a clonagem do repositório
 
 Após checagem dos itens anteriores basta apenas realizar os seguintes comandos:
  ```sh
    $ git clone https://github.com/gamadv/cubos-movies.git
    cd cubos-movies
  ```
  ```sh
    $ npm install
    or
    $ yarn install
  ```
  ```sh
    E Por fim, para rodar o projeto em seu http://localhost:3000/ basta apenas:
    $ yarn start
  ````
## :black_nib: Observações
Algumas notas sobre características e requisitos do projetos:
- [x] API de consumo teve sua própria chave gerada no TMDB
- [x] Funcionalidade principal de busca e listagem de filmes está funcionando, juntamente com a página individual de cada.
- [x] A busca foi implementada por nome.

#### :wrench: Pendências Técnicas
Infelizmente alguns pontos ficaram ausentes por questões internas, estarei citando para futuras correções no projeto.
- Responsividade: Faltou configurações pertinentes até a data de entrega (01.04.2021), mas alterações foram realizadas na _branche: fix--Responsive-Layout
    - Adaptações do _Layout_ na _branche_ levarão em consideração telas entre 768px e 1024px. (as configurações supriram 95% dos modelos.
- Tratamentos para tradução e conversão de alguns dados puxados da _API_ como data, idioma, valores, etc.



<h3 align="center"> :checkered_flag: Made by: <a href="https://www.linkedin.com/in/gama-leal" /> Moacir Gama </a> :checkered_flag: </h3>
