# Blog do código

## Visão Geral da API

Essa aplicação é um projeto acadêmico que possui funcionalidades de um blog simples com recursos de autenticação. O principal objetivo é a prática e demonstração da utilização de um sistemas de autenticação via token. Ela permite que os usuários criem contas, excluam contas, façam login e logout, consultem e criem postagens. A autenticação é baseada em tokens JWT (JSON Web Tokens) e as senhas dos usuários são armazenadas de forma segura usando a função de hash bcrypt. O Redis é utilizado para controlar o logout dos usuários.

## Tecnologias Utilizadas

A API de autenticação para o blog utiliza diversas tecnologias para garantir um sistema seguro e confiável. Abaixo estão as principais tecnologias utilizadas:

- **Node.js:** A plataforma Node.js é a base do servidor da API. Ela permite a execução de código JavaScript no lado do servidor e é amplamente conhecida por sua escalabilidade e eficiência.

- **bcrypt:** A biblioteca bcrypt é usada para a criptografia segura de senhas. Ela aplica uma função de hash unidirecional que é computacionalmente cara, o que dificulta a quebra das senhas armazenadas.

- **jsonwebtoken:** A biblioteca jsonwebtoken é responsável pela geração e validação de tokens JWT (JSON Web Tokens). Esses tokens são usados para autenticação e autorização, contendo informações codificadas em formato JSON e assinadas digitalmente.

- **Redis:** O Redis é um banco de dados em memória usado como armazenamento de chave-valor. Neste caso, o Redis é utilizado para controlar o logout dos usuários, armazenando informações como tokens inválidos ou expirados.
