## Prática de Comandos no Terminal (Bash e Zsh)

Realizados todos os exercícios da Parte 1. O último exercício pedia para apagar todos os arquivos com extensão txt - como só tinham arquivos com essa
extensão no diretório, não sobrou nada ao concluir a sessão de exercícios.
##
Realizados todos os exercícios da Parte 2.
Comandos usados nesta Parte: mkdir, rmdir, rm (arquivo e diretórios), cp, mv, head, tail, ls, man.
##
Para renomear um arquivo, utiliza-se o comando mv (move):

mv arquivo1.txt arquivo2.txt
##
Quando utilizamos o comando less para visualizar o conteúdo de um arquivo, podemos teclar "f" ou "b" para navegar 1 página para frente ou para trás, respectivamente.

Para sair, teclamos "q".
##
Quando utilizamos o comando grep, podemos usar os parâmetros:
- -i === busca not-case-sensitive
- -v === retorna todas as linhas que não contém o 'termo'
- -n === retorna o número da linha onde o 'termo' está
- -c === retorna a quantidade de vezes que o 'termo' aparece no arquivo

Sintaxe: grep -iv 'fox' phrases.txt === retorna todas as linhas que não contem 'fox' no arquivo phrases.txt
##
O comando man 'comando' exibe o manual de um dado comando do terminal:

Sintaxe: man ls === exibe o manual do comando 'ls'
##
O comando wc conta os elementos contidos em um arquivo:
- wc -w === retorna a quantidade de palavras
- wc -l === retorna a quantidade de linhas
- wc -c === retorna a quantidade de caracteres

Sintaxe: wc -l phrases.txt === retorna a quantidade de linhas do arquivo phrases.txt
