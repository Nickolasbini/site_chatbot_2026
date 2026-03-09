# PetCare IA - Landing Page com Chatbot de Agendamento

Este projeto foi desenvolvido para o canal CódigoPrático como um guia completo de como transformar um site estático em uma máquina de conversão para negócios locais em 2026.

O sistema utiliza um Assistente Virtual (IA) que guia o usuário por um fluxo de agendamento, armazena os dados localmente para evitar perda de informações e finaliza o atendimento enviando um lead qualificado diretamente para o WhatsApp do proprietário.

## Funcionalidades Principais

    Chatbot Dinâmico: Fluxo de perguntas estruturado em objetos para captura de dados (Nome, Nome do Pet, Serviço e Contato).

    Persistência com LocalStorage: Os dados não são perdidos se o usuário atualizar a página ou fechar o navegador por engano.

    Botão Flutuante Inteligente: Identifica se o usuário já iniciou um atendimento e exibe uma saudação personalizada com atalho direto para o WhatsApp.

    Design Moderno: Interface construída com Tailwind CSS, focada em UX (User Experience) e totalmente responsiva.

    Integração com WhatsApp: Geração automática de links com mensagens pré-definidas e codificadas via encodeURIComponent.

## Tecnologias Utilizadas

    HTML5: Estrutura semântica.

    Tailwind CSS: Estilização via classes utilitárias e componentes modernos.

    JavaScript (Vanilla): Lógica do chatbot, manipulação de DOM e persistência de dados.

    LocalStorage API: Armazenamento local no navegador.

## Estrutura do Projeto

```
├── index.html   # Estrutura principal, seções de serviços e depoimentos.
├── bot.js       # Toda a lógica do chatbot e persistência de dados.
└── README.md    # Documentação do projeto.
```

## Como rodar o projeto

    Faça o download ou clone este repositório:
    Bash

    git clone https://github.com/Nickolasbini/site_chatbot_2026.git

    Abra o arquivo index.html diretamente no seu navegador.

    Para testar a persistência, comece a preencher o chat, recarregue a página e observe o botão flutuante aparecer.

## Deploy (Hospedagem)

O projeto foi configurado para ser hospedado gratuitamente no Always Data. Para replicar o deploy:

    Acesse sua conta no Always Data.

    Utilize o FileZilla para enviar os arquivos index.html e bot.js para a pasta www.

    Certifique-se de que o caminho dos scripts no HTML está correto.

## Tutorial Completo

Este código faz parte de uma aula detalhada no canal CódigoPrático.

    Tutorial Completo no YouTube - https://link-do-seu-video
    Demonstração Online (Always Data) - https://petcarepetcare.alwaysdata.net/
    Hospedagem Hostinger com Desconto - https://hostinger.com.br?REFERRALCODE=QK6NICKOLJTX
