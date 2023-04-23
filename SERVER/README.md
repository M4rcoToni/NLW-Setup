# NLW Setup Server

1. Ao acessar a rota `/habits` com o método POST, o usuário pode criar um novo hábito diário. O título do hábito e os dias da semana em que ele deve ser realizado devem ser fornecidos no corpo da solicitação.

2. Ao acessar a rota `/day` com o método GET, o usuário pode obter uma lista de hábitos que devem ser realizados no dia especificado na solicitação. O dia deve ser especificado como um parâmetro de consulta. Além disso, a lista deve incluir hábitos que já foram concluídos naquele dia.

3. Ao acessar a rota `/habits/:id/toggle` com o método PATCH, o usuário pode marcar ou desmarcar um hábito como concluído para o dia atual. O ID do hábito deve ser fornecido como um parâmetro de rota.

4. Ao acessar a rota `/summary` com o método GET, o usuário pode obter um resumo dos hábitos concluídos e não concluídos nos dias anteriores. O resumo deve incluir a data do dia, o número de hábitos concluídos e o número total de hábitos para esse dia.

## Instalação

Para instalar o Sever e rodar, siga estes passos:

1. Clone este repositório
2. Execute o comando `npm install` para instalar as dependências necessárias
3. Execute o comando `npx prisma generate` para gerar o cliente
3. Execute o comando `npx run dev` para rodar o projeto
