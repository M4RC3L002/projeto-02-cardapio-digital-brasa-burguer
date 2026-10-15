# Verificação da primeira versão

- Compilação Next.js final: aprovada, incluindo validação de campos preenchidos somente com espaços e ajustes de foco.
- Quatro testes automáticos: subtotal em centavos, limites de quantidade, validação/escape da URL WhatsApp e restauração sanitizada da sacola.
- Fluxo verificado no navegador: dois Brasa Clássico com cheddar e bacon = R$ 69,80; observação mantida; entrega exige endereço; resumo contém nome, endereço, itens, adicionais e subtotal corretos; telefone ausente não oferece envio.
- Sacola permaneceu após recarregar; dados de nome/endereço não são persistidos.
- Busca "limao" encontrou a limonada; remoção de item esvaziou a sacola.
- Emulação de 390 px: sem rolagem horizontal e imagens carregadas; painéis e ações acessíveis.

Limites: não houve teste em aparelho físico ou envio real de WhatsApp, pois não há número de uma loja. Não há servidor de pedidos, pagamento online nesta entrega.


## Publicação em 15/10/2026
- Vercel: deploy de produção aprovado e página aberta com o título solicitado.
- GitHub: repositório público com código, imagens ilustrativas e documentação; conexão com a Vercel confirmada.
- Teste em aparelho físico e envio real de WhatsApp continuam pendentes.
