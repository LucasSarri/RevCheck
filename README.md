# Descrição
Aplicação será uma API em Node.js que realizará as tarefas básicas do banco de dados, que são: criação, edição, remoção e busca (CRUD). A API será para realizar o controle financeiro, onde o usuário pode registrar as contas bancárias, movimentações, faturas de cartão de crédito e mais.

# Entidades do Banco de dados
Contas
    Tipo de conta, saldo inicial e saldo atual.
Movimentações
    Transferência, Receita, Despesa e Despesa Cartão.
Categorias
    Divisão entre Despesas e Receitas. Elas possuem uma descrição, cor e ícone.
Planejamento
    Receitas e despesas previstas
Metas
    Valor da meta, nome da meta, data final, cor, iconne e descrição.
Cartões de Crédito
    Data de fechamento, data de vencimento, status da fatura, valor da fatura e limite.

# Funcionalidades
*   Cadastro, busca, edição e remoção das contas bancárias
*   Registro, busca, edição e remoção das movimentações
    *   Tipos básicos de movimentações: receita, despesa, transação, investimento e ...
*   Registro, busca, edição e remoção das categorias

# Anotações
Tela principal tem o mês, que pode ser alterado, saldo total das contas, receitas e despesas do mês selecionado em um cabeçalho. Tem uma sessão de contas, onde é apresentadas todas as contas, seus saldos e o saldo total. Tem uma sessão de cartões de crédito, onde são apresentados todos os cartões com suas faturas e a fatura total. Sessão com gráfico de despesas por categoria. Sessão com o plajamento mensal. Sessão com balanço mensal, apresentando receitas e despesas, além do balanço que é a diferença entre os dois. Por fim temos a sessão de metas.