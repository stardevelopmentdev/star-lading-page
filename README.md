# ⭐ Star Development - Landing Page

Este repositório contém o código-fonte da landing page da **Star Development**, uma agência de desenvolvimento web focada em criar soluções digitais modernas, funcionais e de alto desempenho.

A página foi construída com tecnologias modernas de frontend, seguindo uma arquitetura baseada em componentes para facilitar a manutenção e escalabilidade.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

  * **[React](https://reactjs.org/)**: Biblioteca JavaScript para a construção de interfaces de usuário.
  * **[Vite](https://vitejs.dev/)**: Ferramenta de build moderna que oferece uma experiência de desenvolvimento extremamente rápida.
  * **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS utility-first para a criação de designs customizados de forma rápida.
  * **[React Router DOM](https://reactrouter.com/)**: Para gerenciamento de rotas e navegação entre páginas.
  * **[Font Awesome](https://fontawesome.com/)**: Biblioteca de ícones vetoriais.

## ⚙️ Instalação e Execução Local

Para rodar este projeto na sua máquina local, siga os passos abaixo.

### Pré-requisitos

  * [Node.js](https://nodejs.org/) (versão 18.x ou superior)
  * npm (geralmente instalado junto com o Node.js)

### Passos

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/star-lading-page.git
    ```

2.  **Navegue até a pasta do projeto:**

    ```bash
    cd star-lading-page
    ```

3.  **Instale as dependências:**
    Este comando irá ler o arquivo `package.json` e instalar todas as bibliotecas necessárias.

    ```bash
    npm install
    ```

4.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo chamado `.env` na raiz do projeto e adicione sua chave de acesso do serviço de formulários (Web3Forms), se aplicável.

    ```
    # Exemplo de conteúdo para o arquivo .env
    VITE_WEB3FORMS_ACCESS_KEY=SUA_CHAVE_DE_ACESSO_AQUI
    ```

5.  **Execute o servidor de desenvolvimento:**
    Este comando iniciará a aplicação em modo de desenvolvimento, geralmente na porta `5173`.

    ```bash
    npm run dev
    ```

6.  **Abra no navegador:**
    Acesse [`http://localhost:5173`](https://www.google.com/search?q=http://localhost:5173) para ver a aplicação funcionando.

## 🏗️ Estrutura do Projeto

A estrutura de pastas foi organizada para manter uma clara separação de responsabilidades:

  * **`/public`**: Contém assets estáticos, como o `favicon.svg`.
  * **`/src/assets`**: Contém assets que são processados pelo Vite, como imagens e ícones em formato de componentes.
  * **`/src/components`**: Onde todos os componentes React reutilizáveis estão localizados, separados por funcionalidade (ex: `/home`, `/shop`).
  * **`/src/pages`**: Contém os componentes que representam as páginas completas da aplicação (ex: `Home.jsx`, `ShopPage.jsx`).
  * **`/src/routes`**: Configuração do `react-router-dom` para mapear as URLs para os componentes de página.
  * **`/src/services`**: Módulos para interagir com APIs externas (ex: Google Books API).
  * **`App.jsx`**: O componente raiz que define o layout principal (Header/Footer) e renderiza as páginas através do sistema de rotas.
  * **`main.jsx`**: O ponto de entrada da aplicação React.