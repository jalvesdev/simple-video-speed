# Simple Video Speed

Uma extensão simples para controlar a velocidade de reprodução de vídeos HTML5 usando atalhos do teclado.

Sem menus, configurações ou dependências. Basta usar os atalhos enquanto assiste a um vídeo.

## Atalhos

| Tecla | Ação |
|---|---|
| `D` | Aumenta a velocidade em 0,5× |
| `S` | Diminui a velocidade em 0,5× |
| `R` | Retorna para 1× |

A velocidade é limitada entre **0,5× e 3×**.

Sempre que a velocidade é alterada, um pequeno indicador aparece temporariamente na tela mostrando o valor atual.

## Instalação

### Firefox

Por enquanto, a extensão pode ser carregada temporariamente para desenvolvimento e testes.

1. Clone ou baixe este repositório.
2. Abra `about:debugging` no Firefox.
3. Selecione **Este Firefox**.
4. Clique em **Carregar extensão temporária**.
5. Selecione o arquivo `manifest.json`.

A extensão permanecerá carregada durante a sessão atual do Firefox.

> A publicação no Firefox Add-ons está planejada para uma versão futura.

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
- prioriza o vídeo que está em reprodução;
- funciona com players carregados em frames;
- captura os atalhos do teclado;
- altera a velocidade de reprodução;
- ignora atalhos enquanto o usuário está digitando;
- evita que os atalhos da extensão acionem simultaneamente ações do site;
- exibe temporariamente a velocidade atual na tela.

## Tecnologias

O projeto foi desenvolvido com JavaScript puro e utiliza APIs nativas do navegador e dos elementos HTML5 de vídeo.

Não há frameworks, bibliotecas ou dependências externas.

## Por que este projeto existe

Simple Video Speed começou como uma ferramenta para resolver uma necessidade pessoal: controlar a velocidade dos vídeos de forma rápida sem depender dos controles de cada player.

Além de continuar sendo uma extensão que utilizo no dia a dia, o projeto também serve como uma forma prática de estudar JavaScript, APIs do navegador e o funcionamento de extensões.

A intenção é manter o projeto simples. Novas funcionalidades só fazem sentido quando melhorarem a experiência sem transformar uma ferramenta pequena em algo desnecessariamente complexo.
