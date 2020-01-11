# Formulário simples para usar como exemplo em outras aplicações.

## [Acesse o formulário aqui](https://peidrao.github.io/simpleForm/)

Esse formulário foi criado com o intuito de carregar algumas aplicações para serem usadas de outras maneiras por outros usuários que nele se inspirarem.

### Funções importantes que fazem um formulário ficar mais robusto
#### 1. Selecionar Estado e Cidade do usuário que ele o usar.

Talvez seja uma informação fútil dependendo da usabilidade que for dada para ele, contudo, para outros usos é de extrema importância saber de onde (localidade) seu usuário está usando seu sistema.

#### 2. Máscara que completa informações referentes a "códigos".

Para quem gosta das coisas bem feitas, e gosta que o usuário tenha o mínimo de esforço ao digitar informações relacionadas a chave mais símbolos é uma boa opção de uso. Ora! Precisamos sempre facilitar a vida do usuário, sem precisar digitar outra coisa além de dos números. A máscara que estamos usando neste formulário é para CEP, contudo você pode usar para qualquer aplicação.
- [x] Identidade (RG)
- [x] CPF
- [x] Número de celular
- [x] Códigos no geral

#### 3. Verificar a força da senha

Essa função é interna, ou seja, o usuário não estará vendo nada, mas o sistema sim. Esse validador tem como objetivo, ver se a senha que o usuário digitou tem uma quantidade de números X, letras minúsculas, como também maiúsculas e alguns caracteres **[!@#$%&*()+=|]** (podendo vocês adicionarem mais).

#### 4. Barra indicando a força da senha

Já em uma parte mais visual, e tendo uma relação direta com a aplicação passada. Temos uma parte mais visual, indicando em quatro cores a força da senha.

#### 5. Mostrar/Ocultar sua senha

Hoje em dia é de extrema importância que o usuário saiba o que está digitando, dessa forma foi implementado essa função, para mais uma vez facilitar a vida do usuário


## by: Pedro Victor da Fonseca [@peidrao](https://twitter.com/peidrao)