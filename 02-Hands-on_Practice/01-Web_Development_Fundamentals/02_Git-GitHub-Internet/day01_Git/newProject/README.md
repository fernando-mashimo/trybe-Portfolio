# Versionamento e Git
## Como funciona o versionamento?
O versionamento consiste em estabelecer checkpoints ao longo do ciclo de vida do Projeto visando a entrega de todas as features de forma correta e que possibilite a recuperação de versões / estados do Projeto em casos de necessidade, como por exemplo, ao implementar uma feature com algum tipo de erro e que exija ao desenvolvedor/time resgatar o código de uma versão anterior e implementar o código correto.

## Usando GIT na prática!
Dado um diretório onde serão armazenados os arquivos do Projeto, executar os passos abaixo para criar o repositório (branch 'main') e uma branch subsquente:

1) Dentro do diretório do Projeto, executar o comando "git init".
2) Executar o comando "git status" e verificar que se encontra na branch "main".
3) Criar uma branch subsequente executando o comando "git checkout -b nome-da-branch" ou "git branch nome-da-branch".
4) Realize as alterações desejadas nos arquivos do Projeto.
5) Adicione os arquivos alterados para a fase de "staging" por meio do comando "git add ." (para adicionar todos os arquivos alterados de uma só vez) ou "git add nome-do-arquivo" (para adicionar arquivos individualmente).
6) Verifique que todos os arquivos a serem atualizados estão na em staging por meio do comando "git status".
7) Realize o commit das alterações por meio do comando "git commit -m 'Descrição das Alterações'".
8) Execute "git status" para se certificar que todas as alterações foram commitadas com sucesso.
9) Suba até o nível da branch main executando o comando "git checkout main".
10) Faça o merge executando o comando "git merge nome-da-branch".
11) Execute "git status" para se certificar que não há nenhuma pendência.

Adicionalmente, pode ser executado o comando "git log" para verificar o histórico das operações realizadas no repositório (commits e merges). 