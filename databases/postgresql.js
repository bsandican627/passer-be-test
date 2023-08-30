const { newDb } = require('pg-mem');

const postgresql = newDb();

// create mock data
postgresql.public.none(`create table users(pk_user integer, name text, status boolean);
                insert into users values (123, 'Juan', true);`);

const backup =postgresql.backup();
postgresql.public.none(`update users set name='Pablo';`);

backup.restore();
postgresql.public.many(`select * from users`);


// 
postgresql.public.none(`create table transactions(pk_transaction number,fk_user number , description string, amount float);
                insert into users values (12,34,"Detalle",11.25);`);

const backups =postgresql.backup();
postgresql.public.none(`update transactions set description='Detalle';`);

backups.restore();
postgresql.public.many(`select * from transactions`);

//
module.exports = {
    postgresql
}

