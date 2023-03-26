## POSTGRES

para iniciar o container

```bash
sudo docker run -p 5432:5432 -v /home/lucassantos/Documentos/@pessoal/FinancesPlanProj/DB:/var/lib/postgresql/data -e POSTGRES_PASSWORD=1234 postgres
```

entrar no container e criar o banco financesdb

```bash
sudo docker exec -it admiring_torvalds /bin/bash
```

alterar para o usuario postgres

```bash
su postgres
```

entrar no banco com psql

```bash
psql
```

criar o usuario lucassantos

```bash
CREATE USER lucassantos WITH PASSWORD 'senhadificil';
```

Alterar o dono do database financesdb

```bash
ALTER DATABASE financesDB OWNER TO lucassantos;
```

Dar os privilégios

```bash
GRANT ALL PRIVILEGES ON DATABASE financesDB TO lucassantos;
```

sair do psql com \q

voltar para root 

```bash
exit #ate o usuario voltar a root
```

adicionar o usuario ao container

```bash
adduser lucassantos
```

depois fazer as operações com ele

```bash
su lucassantos
```

em seguida entrar no psql novamente

```bash
psql financesdb
```

Pronto banco de dados configurado

VAMOS CRIAR A TABELA NO BD USANDO SEQUELIZE

para executar a migration que criará a tabela de o seguinte comando a partir da pasta da api

```bash
npx sequelize-cli db:migrate
```

Pronto tabela criada e a partir daí podemos fazer os requests http a api

## API

Para rodar o projeto

```bash
npm start
```

## SWAGGER
OBS.: Caso seja alterada a porta terá também que alterar aqui na rota


http://{URL}:3333/api-docs/
