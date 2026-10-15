# Projeto 02 - Cardápio Digital - Brasa Burguer

Primeira versão de uma hamburgueria fictícia. Projeto independente do portfólio de Marcelo Andrade.

## Executar
Node.js 22.18+ (ou 24 LTS).

```sh
npm ci
npm run dev
npm run build
npm test
```

## Funcionalidades
- Busca por nome/ingrediente, sem diferenciar acentos, combinada com categorias.
- Fotos ilustrativas, produtos com ingredientes e preços em reais.
- Personalização com adicionais, quantidades de 1 a 20 e observações de até 140 caracteres.
- Sacola persistida somente neste navegador; sem cadastro, servidor ou pagamentos.
- Retirada ou entrega, nome e endereço quando necessário.
- Resumo para revisão, cópia e envio pelo WhatsApp quando configurado.
- Painéis em dialog nativo, Escape, foco, teclado e estrutura acessível.

## Configurar o WhatsApp
Copie .env.example para .env.local. Defina NEXT_PUBLIC_WHATSAPP_NUMBER com código do país + DDD + número, somente dígitos. Recompile após alterar.

Sem número válido, nenhum link de envio é criado. A demonstração apenas prepara e copia o resumo. Quando configurado, o visitante ainda precisa confirmar o envio no WhatsApp e a loja confirmar o pedido. Não há confirmação automática ou integração de pagamento.

## Antes de operar com uma loja real
Editar lib/catalog.ts: nome, telefone, produtos, preços e ingredientes; substituir fotos por fotos reais; informar endereço, horários, área e taxa de entrega, política de atendimento e pagamento. Rever informações de alergênicos. A demonstração não valida disponibilidade nem preços no servidor, não é um sistema de gestão e não registra pedidos em banco.

## Organização
app/: rotas e identidade. components/menu.tsx: catálogo e fluxo de pedido. components/sheet.tsx: painéis acessíveis. lib/catalog.ts: configuração e catálogo. lib/order.ts: funções de preço e WhatsApp. tests/: cálculos e URLs.

## Design móvel
Referências fornecidas pelo usuário: cards fotográficos, cantos arredondados, categorias e sacola fixa. Composição própria em creme e laranja, sem copiar marcas ou telas. Safe areas, inputs de 16px, zoom permitido, hover limitado a mouse e respeito a movimento reduzido. Testar também em celular real: emulação não confirma teclado, notch ou sensação do toque.

Watermelon UI foi consultado. As sugestões de menus de sistema/announcements não correspondiam a um cardápio e foram descartadas; estrutura de Card 1 foi consultada, sem instalar dependências ou usar o conteúdo de login. Não há uma dependência runtime Watermelon.

## Fotos
Três imagens geradas para esta demonstração (hambúrguer, batatas e limonada), não fotografias de produtos reais. Uma mesma imagem representa mais de uma variação e não deve ser usada como fotografia comercial de um produto real.

## Publicação
Preparado para Vercel: preset Next.js, instalação npm ci, build npm run build, raiz desta pasta. Publicado para testes em https://projeto-02-cardapio-digital-brasa-b.vercel.app/. Repositório público: https://github.com/M4RC3L002/projeto-02-cardapio-digital-brasa-burguer. A Vercel está conectada ao repositório para publicação automática. NEXT_PUBLIC_* são públicos: nunca coloque tokens nesses campos.
