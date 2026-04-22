# 🚀 TaskFlow | Gerenciador de Tarefas Inteligente

[Link para o Projeto Ao Vivo](https://taskflow-ebon-theta.vercel.app/)

O **TaskFlow** é um gerenciador de tarefas moderno, desenvolvido com foco em **Clean Code**, arquitetura escalável e tipagem forte. Este projeto faz parte do meu portfólio de transição para a área de tecnologia.

## 🛠️ Tecnologias e Ferramentas

* **React 18** com **Vite** para um ambiente de desenvolvimento ultra-rápido.
* **TypeScript** para garantir segurança e previsibilidade nos dados.
* **Tailwind CSS** para uma interface responsiva, estilizada com as melhores práticas de produção.
* **Context API** para gestão de estado global (Autenticação).
* **Lucide React** para iconografia nítida e moderna.
* **Vitest & React Testing Library** para a base de testes automatizados.
* **SonarLint/SonarQube** para garantia de qualidade de código.

## ✨ Funcionalidades Principais (CRUD Completo)

1.  **Create:** Adição instantânea de tarefas com persistência no `localStorage`.
2.  **Read:** Listagem dinâmica com recuperação automática do estado após o carregamento da página.
3.  **Update (Edição & Toggle):** * Edição de texto em tempo real (botão de lápis).
    * Marcação de conclusão com feedback visual (riscado e transparência).
4.  **Delete:** Remoção segura de itens da lista.
5.  **Autenticação Mock:** Fluxo de login que armazena dados de sessão e exibe o perfil do usuário logado no Dashboard via `Context API`.

## 🧪 Estrutura do Projeto

Para manter a organização profissional, o projeto segue a seguinte estrutura:

```text
src/
 ├── @types/        # Definições de interfaces (Task, User)
 ├── assets/        # imagens
 ├── contexts/      # Lógica de Context API e useMemo
 ├── pages/         # Páginas de Login e Dashboard
 ├── tests/         # Testes unitários com Vitest
 └── App.tsx        # Configuração de rotas (Named Exports)

 ## 📸 Demonstração

![Preview do TaskFlow](./assets/dashboard.JPG)

![Preview do TaskFlow](./assets/dashboard1.JPG)
```

## 🚀 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Li-code1/taskflow.git
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor local:**
    ```bash
    npm run dev
    ```

4.  **Rodar os testes:**
    ```bash
    npm run test
    ```
👤 Desenvolvedora

Liliane Lima 

Full Stack Python Developer em formação.
