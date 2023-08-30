const { Transaction } = require('pg-mem');
const users = require('../../services/users')

describe('users main functions', () => {
    // createUser function test
    test('createUser with {pk_user: 123, name: "Brayan"}', async () => {
        let user = await users.createUser(123, "Brayan");
        expect(user.pk_user).toBe(123);
    });

    // getUser function test
    test('getUser with {pk_user: 123}', async () => {
        let user = await users.getUser(123)
        expect(user.pk_user).toBe(123);
    });

    // putUser function test
    test('putUser with {pk_user: 123}', async () => {
        let user = await users.putUser(123)
        expect(user.pk_user).toBe(123);
    });

    // deleteUser function test
    test('deleteUser with {pk_user: 123}', async () => {
        let user = await users.deleteUser(123)
        expect(user.pk_user).toBe(123);
    });

    // gettransaction function test
    test('gettransaction with {pk_transactions: 12, fk_user: 34, description: "Detalle", amount: 11.25}', async () => {
        let transacciones = await Transaction.gettransaction(12, 34, 'Detalle', 11.25);
        expect(transacciones.pk_transactions).toBe(12);
    });

     // Posttransactions function test
     test('createtransactions with {pk_transactions: 12, fk_user: 34, description: "Detalle", amount: 11.25}', async () => {
        let transacciones = await Transaction.createUser(12, 34, 'Detalle', 11.25);
        expect(transacciones.pk_transactions).toBe(12);
    });
 
    // puttransactions function test
    test('puttransactions with {pk_transactions: 12, fk_user: 34, description: "Detalle", amount: 11.25}', async () => {
        let transacciones = await Transaction. posttransactions(12, 34, 'Detalle', 11.25);
        expect(transacciones.pk_transactions).toBe(12);
    });
   // gettransactions function test
   test('gettransactions with {pk_transactions: 12, fk_user: 34, description: "Detalle", amount: 11.25}', async () => {
    let transacciones = await Transaction.gettransactions(12, 34, 'Detalle', 11.25);
    expect(transacciones.fk_user).toBe(12);
    });
})