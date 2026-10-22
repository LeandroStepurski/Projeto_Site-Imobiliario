## 🎨 1. Escolhas de Design e Interface (UI/UX)
* **Identidade Visual:** Planejada para transmitir credibilidade e sofisticação, utilizando uma paleta de cores sóbria baseada em tons escuros e dourado/marrom.
* **Componentização:** A listagem de propriedades é gerada através de **Cards de Imóveis** (`.property-card`), organizando de forma clara dados como preço, título, características (quartos, vagas, metragem) e localização.
* **Filtro de Busca:** Grid posicionado no topo da página para otimizar a usabilidade, permitindo buscas rápidas por Tipo, Localização e Finalidade.

> 📷 **Página inicial do site mostrando o topo e o formulário de filtros**
![alt text](/assets/telaInicial.png)

---

## 🏗️ 2. Arquitetura do Site e Tecnologias
O projeto adota uma arquitetura padrão *Client-Side*, dividido em três camadas fundamentais:
* **HTML5:** Estruturação semântica utilizando tags como `<form>`, `<article>` e `<section>` para melhor acessibilidade.
* **CSS3:** Estilização moderna utilizando Flexbox/Grid para garantir responsividade e alinhamento dos componentes.
* **JavaScript (ES6):** Camada de comportamento responsável por interceptar as ações do usuário e manipular os elementos da tela em tempo real.

---

## ⚙️ 3. Dinâmica da Página de Contato e Conceitos Aplicados
A página de contato aplica conceitos fundamentais de Engenharia de Software e interatividade no ambiente *Client-Side* para processar os dados enviados pelo usuário:

1. **Manipulação do DOM:** Utilização do `document.getElementById` para mapear o formulário de envio e capturar o valor digitado no campo de texto (`.value`), isolando os dados de identificação do cliente (como o nome).
2. **Programação Orientada a Eventos:** O script utiliza o método `addEventListener` para monitorar especificamente o evento de envio (`submit`) do formulário, disparando as ações de validação no momento exato em que o usuário clica no botão.
3. **Interrupção de Fluxo Padrão (`preventDefault`):** Aplicação do conceito de controle de requisições nativas do navegador através do `event.preventDefault()`. Isso impede que a página seja recarregada e perca os dados digitados antes do tratamento do script.
4. **Feedback síncrono e Reset de Estado:** O sistema gera um retorno visual imediato para o usuário através de uma caixa de diálogo personalizada (`alert`), confirmando o recebimento dos dados, e na sequência limpa os campos utilizando a função `.reset()`, preparando a interface para uma nova interação.

> 📷 **Página de contato com o formulário**
![alt text](/assets/formularioContato.png)

---

## 🚀 4. Desafios Enfrentados e Soluções (Depuração)
Durante os ciclos de testes, foram superados três principais gargalos técnicos:

* **Organização e Estruturação de Classes:** O maior desafio inicial foi manter uma nomenclatura padronizada e limpa para as classes (utilizando a metodologia BEM ou similar). A falta de organização prévia gerava conflitos onde estilos de um componente acabavam "vazando" e quebrando o layout de outras partes do site. A solução foi isolar as regras de escopo e renomear as classes de forma única (ex: `.property-card`, `.filter-group`).
* **Alinhamentos e Responsividade do Layout:** Ajustar o posicionamento dos elementos dentro dos cards de imóveis e do grid de filtros exigiu um domínio preciso de propriedades de estilização moderna. Alinhar textos com ícones, garantir que as imagens não ficassem distorcidas e manter o formulário simétrico exigiram a substituição de margens fixas pelo uso estratégico de Flexbox (`display: flex; align-items: center; justify-content: space-between;`).
* **Especificidade e Conflitos de Seletores no CSS:** Em vários momentos, as regras aplicadas no arquivo CSS não surtiam efeito na tela porque seletores globais do navegador ou outras regras anteriores tinham maior peso (especificidade). O desafio foi depurar o código através do painel de inspeção do navegador para identificar quais regras estavam sendo sobrescritas e corrigir os seletores para garantir a renderização correta do design planejado.