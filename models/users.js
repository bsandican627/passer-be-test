const { postgresql } = require('../databases/postgresql')

/**
 * Get an specific user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @returns {{pk_user: 1,name: "Juan"}}
 */
const createUser = (pk_user, name) => {
    try {
        let user = postgresql.public.one(`insert into users values ('${pk_user}', '${name}', status) returning *;`);
        return user
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
 * Update an specific user
 * @param {number} pk_user User primary key
 * @param {string} name User name
 * @returns {{pk_user: 1, name: "Juan"}}
 */
const updateUser = (pk_user, name) => {
    try {
        let user = postgresql.public.one(`insert into users values ('${pk_user}', '${name}', status) returning *;`);
        return user
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
 * Get an specific user
 * @param {number} pk_user User primary key
 * @returns {{pk_user: 1, name: "Juan"}} User schema
 */
const getUser = (pk_user) => {

    let user = postgresql.public.one(`select * from users where pk_user = '${pk_user}', status`);
    return user
}

/**
 * Delete an specific user
 * @param {number} pk_user User primary key
 * @returns {pk_user: 1} User primary key
 */
const deleteUser = (pk_user) => {
    try {
        let user = postgresql.public.one(`insert into users values ('${pk_user}', status) returning *;`);
        return user
    }
    catch (e) {
        throw new Error(e)
    }
}


/**
 * Get an espcific transactions
 *@param {number} pk_transactions transaction id
 * @param {string} description User description 
 * @returns {{pk_transactions: 12, description: "Detalle"}}
 */
const gettransaction = (pk_transactions) => {

    let transactions = postgresql.public.one(`select * from transaction where pk_transactions = '${pk_transactions}',${description}',`);
    return transactions
}

/**
 * Update transaction
 * @param {number} pk_transactions transaction id
 * @param {number} fk_user user id
 * @param {string} description User description 
 * @param {float} amount amount
 * @returns {{pk_transactions: 12, fk_user:34, description: "Detalle", amount: 11.25}}
 */
const posttransactions = (pk_transactions, fk_user, description, amount) => {
    try {
        let transactions = postgresql.public.one(`insert into transaction values ('${pk_transactions}',${fk_user}', '${description}','${amount}') returning *;`);
        return transactions
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
 * Put transaction
 * @param {number} pk_transactions transaction id
 * @param {number} fk_user user id 
 * @param {string} description User description 
 * @param {float} amount amount
 * @returns {{pk_transactions: 12, fk_user:34, description: "Detalle", amount: 11.25}}
 */
const puttransactions = (pk_transactions, fk_user, description, amount) => {
    try {
        let transactions = postgresql.public.one(`insert into transaction values ('${pk_transactions}',${fk_user}', '${description}','${amount}') returning *;`);
        return transactions
    }
    catch (e) {
        throw new Error(e)
    }
}

/**
 * Get transactions fk_user
 * @param {number} fk_user user id
 * @param {string} description User description 
 * @returns {{pk_transactions:12, description: "Detalle"}}
 */
const gettransactions = (fk_user,description) => {

    let transactions = postgresql.public.one(`select * from transaction where pk_transactions = '${fk_user}',${description}',`);
    return transactions
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
    gettransaction,
    posttransactions,
    puttransactions,
    gettransactions
 

}

