continue reading docs @ https://sequelize.org/master/manual/model-querying-basics.html#shorthand-syntax-for--code-op-in--code-

### Learning postgres via sequelize

TODO: add seed data program as 00_seed_server.js.

1. model is an abstraction that represents a table
2. models have singular names (such as User) while tables have pluralized names (such as Users)
3. Note, from the usage of await in the snippet above, that save is an asynchronous method. In fact, almost every Sequelize method is asynchronous; build is one of the very few exceptions.
4. Data types: https://sequelize.org/master/manual/model-basics.html#data-types
5. Created user and db with name chetan, and assign owner of chetan db as chetan user. Also, set chetan user's password as `66p`.
6. set alias for psql as winpty psql in fishbashrc file. Yikes!
7. Read about operators: https://sequelize.org/master/manual/model-querying-basics.html#operators
8. Configure schemas from pgadmin via - mydb_test > Schemas > public > Tables > myTable > Columns. Yikes!

### Details for postgres

- Directory set for storing data:
  C:\Program Files\PostgreSQL\13\data

- Password for database superuser(user: postgres, pass: postgresp):
- Password for database superuser(user: chetan, pass: 66p):
- Also, assigned all privilidges to user chetan too, i.e., right click user in pgadmin4, and click on Privilidges tab, and gave all rights to it.

- Port in use:
  5432

- Locale:
  English, India

---

Apache port for PERM_HTTPD: 8083 (didn't work this shit though.)

### Install setup

yarn add sequelize #installs sequelize
yarn add pg pg-hstore #installs postgres drivers

---

Installed pgAdmin for postgres too.

Postgres master password: postgresp

To browse pgamin: visit http://127.0.0.1:51022/browser/

### Changing postgres port

https://dba.stackexchange.com/questions/41458/changing-postgresql-port-using-command-line

### Amazing deno with postgresqp and deno crash course:

https://www.youtube.com/watch?v=KuaI6mphFNc

https://www.youtube.com/watch?v=NHHhiqwcfRM&t=1958s
