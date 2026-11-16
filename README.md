# Linha & Forma — Site do curso de costura

Landing page responsiva em HTML, CSS e JavaScript puro.

## Como executar
1. Extraia a pasta `atelie-linha-site`.
2. Abra `index.html` no navegador. Para uma experiência mais próxima de hospedagem, use a extensão Live Server do VS Code.
3. O site não exige instalação de dependências.

## Personalização do WhatsApp
Abra `script.js` e altere:
```js
const WHATSAPP_NUMBER = "";
```
Insira o número autorizado com código do país e DDD, somente dígitos. Exemplo de formato: `5511999999999`. Enquanto estiver vazio, o formulário valida os dados, mas não finge enviar uma solicitação.

## Conteúdo
- 6 peças: saia, calça, blusa, vestido, camisa e shorts.
- Filtros: todas, fabricação e consertos.
- Modal de orçamento com validação.
- 3 serviços.
- Mapa incorporado da ETEC Dr. Renato Cordeiro.
- Navegação mobile, animações de entrada e botão voltar ao topo.
- Suporte a `prefers-reduced-motion`.

## Imagens
As fotografias estão vinculadas ao CDN do Unsplash e carregam sob demanda quando aplicável. As páginas individuais das fotografias utilizadas como destaque e suas licenças estão indicadas abaixo:
- [A designer measures fabric on a dress form — Vitaly Gariev](https://unsplash.com/photos/a-designer-measures-fabric-on-a-dress-form-slRBeGlbj9A) — Unsplash License.
- [A sewing machine is in use, creating a seam — Vitaly Gariev](https://unsplash.com/photos/a-sewing-machine-is-in-use-creating-a-seam-k1aVi7IApm4) — Unsplash License.
- [A sewing room with a vintage sewing machine and supplies — Redd Francisco](https://unsplash.com/photos/a-sewing-room-with-a-vintage-sewing-machine-and-supplies-uvBfs51QJIU) — Unsplash License.

As demais imagens de produtos são carregadas do CDN do Unsplash. Antes de publicar comercialmente, confira a página e os termos/licença de cada fotografia e substitua qualquer imagem que não corresponda ao uso pretendido. As imagens remotas exigem conexão com a internet.

## Observações
- O número de WhatsApp não foi inventado e precisa ser configurado.
- O mapa e o botão de rota usam o endereço fornecido no briefing.
- Não foram adicionados horários, salas ou informações de funcionamento não fornecidas.
- O nome “Linha & Forma” é uma identidade fictícia criada para o projeto.
