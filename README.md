# Simple Video Speed

Uma extensão simples para controlar a velocidade de reprodução de vídeos HTML5 usando o teclado.

Criei este projeto porque queria uma forma rápida de alterar a velocidade de vídeos sem precisar abrir menus ou depender dos controles oferecidos por cada player.

A proposta é manter a extensão pequena e fazer apenas uma coisa: controlar a velocidade do vídeo de forma simples.

## Atalhos

| Tecla | Ação |
|---|---|
| `D` | Aumenta a velocidade em 0.5× |
| `S` | Diminui a velocidade em 0.5× |
| `R` | Retorna para 1× |

A velocidade pode variar entre **0.5× e 3×**.

Sempre que ela é alterada, a velocidade atual aparece brevemente na parte superior da página.

## Como funciona

A extensão procura os elementos `<video>` presentes na página.

Quando existem vários vídeos, ela tenta utilizar primeiro aquele que estiver sendo reproduzido. Caso nenhum esteja em reprodução, utiliza o primeiro vídeo encontrado.

Os atalhos são ignorados enquanto você estiver digitando em campos de texto ou elementos editáveis da página.

Quando um dos atalhos da extensão é utilizado, o evento de teclado é interceptado para evitar conflitos com atalhos implementados pelo próprio site.

## Compatibilidade

A extensão trabalha diretamente com elementos HTML5 `<video>` e pode funcionar em diferentes sites que utilizam esse padrão.

Ela também executa dentro de frames, o que permite funcionar com players incorporados em outras páginas.

Alguns sites podem implementar players, atalhos ou mecanismos próprios que exijam ajustes específicos.

## Instalação

Por enquanto, a extensão pode ser instalada manualmente em navegadores baseados em Chromium.

1. Clone ou baixe este repositório.
2. Abra a página de extensões do navegador.
3. Ative o **Modo do desenvolvedor**.
4. Escolha **Carregar sem compactação**.
5. Selecione a pasta do projeto.

Depois disso, abra uma página com vídeo e utilize `D`, `S` e `R` para controlar a velocidade.

## Estrutura do projeto

```text
simple-video-speed/
├── manifest.json
└── content.js
```

### manifest.json

Define a extensão utilizando Manifest V3 e carrega o script responsável pelo controle dos vídeos.

### content.js

Contém toda a lógica da extensão:

- identifica os vídeos da página;
- seleciona o vídeo em reprodução;
- captura os atalhos do teclado;
- altera a velocidade de reprodução;
- evita conflitos com campos de texto e atalhos dos sites;
- exibe temporariamente a velocidade atual na tela.

## Tecnologias

O projeto foi desenvolvido com JavaScript puro e utiliza as APIs disponíveis no navegador e nos elementos HTML5 de vídeo.

Não há frameworks ou dependências externas.

## Por que este projeto existe

Simple Video Speed começou como uma ferramenta para resolver uma necessidade pessoal.

Além de continuar sendo uma extensão que utilizo no dia a dia, o projeto também serve como uma forma prática de estudar JavaScript, APIs do navegador e o funcionamento de extensões.

A intenção é manter o projeto simples. Novas funcionalidades só fazem sentido quando melhorarem a experiência sem transformar uma ferramenta pequena em algo desnecessariamente complexo.
