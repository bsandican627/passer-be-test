const { Transaction } = require('pg-mem')
const usersModel = require('../models/users')

/**
 * Get an espcific user
 * @param {number} pk_user User id
 * @returns {{pk_user: 1, name: "Juan"}}
 */
const getUser = async (pk_user) => {
    try {
        return await usersModel.getUser(pk_user)
    } catch (e) {
        throw new Error(e.message)
    }
}

/**
 * Create an user
 * @param {number} pk_user User id
 * @param {string} name User name
 * @returns {{pk_user: 1, name: "Juan"}}
 */
const createUser = async (pk_user, name) => {
    try {
        return usersModel.createUser(pk_user, name)
    } catch (e) {
        throw new Error(e.message)
    }
}

/**
 * put an user
 * @param {number} pk_user User id
 * @param {string} name User name
 * @returns {{pk_user: 1, name: "Juan"}}
 */
const putUser = async (pk_user, name) => {
        const {body} = req;
    
        try{
            const usuarios= await usersModel.findByPk( pk_user);
            if( !usuarios){
                return res.status(404).json({
                    msg: 'Falló al encontrar la transaccion con esa fk_user' + pk_user
                });
            }
            await usuarios.update(body);
    
            res.json(usuarios);
    
        }catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'No funcionó'
            })
        }
        
}

/**
 * delete an user
 * @param {number} pk_user User id
 * @param {string} name User name
 * @returns {{pk_user: 1, name: "Juan"}}
 */
const deleteUser = async (pk_user, name) => {
    const {body} = req.params;

    try{
        const usuarios= await usersModel.findByPk( pk_user);
        if( !usuarios){
            return res.status(404).json({
                msg: 'Falló al encontrar la transaccion con esa fk_user' + pk_user
            });
        }
        await usuarios.update({pk_user: false});

        res.json(usuarios);

    }catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'No funcionó'
        })
    }
    
}

/**
 * Get transaction pk_transactions
 *@param {number} pk_transactions transaction id
 * @param {string} description User description 
 * @param {float} amount float
 * @returns {{pk_transactions: 12, description: "Detalle", amount: 11.25}}
 */
 const gettransaction = async (pk_transactions, fk_user, description, amount) => {
    try {
        return await Transaction.gettransaction(pk_transactions, fk_user, description, amount)
    } catch (e) {
        throw new Error(e.message)
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
const puttransactions = async (fk_user, description, amount) => {
    const {body} = req;
    try{
        const transacciones= await Transaction.findByPk(fk_user, description, amount);
        if( !transacciones){
            return res.status(404).json({
                msg: 'Falló al encontrar la transaccion con esa fk_user' + fk_user
            });
        }
        await transacciones.update(body);

        res.json(transacciones);

    }catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'No funcionó'
        })
    }
    
}

/**
 * Get transaction fk_user
 * @param {number} fk_user user id
 * @param {string} description User description 
 * @param {float} amount amount
 * @returns {{fk_user:34, description: "Detalle", amount:11.25}}
 */
const gettransactions = async (pk_transactions, fk_user, description, amount) => {
    try {
        return await Transaction.gettransactions(pk_transactions, fk_user, description, amount)
    } catch (e) {
        throw new Error(e.message)
    }
}

/**
 * Post transaction
 *@param {number} pk_transactions transaction id
 * @param {number} fk_user number
 * @param {string} description User description 
 * @param {float} amount amount
 * @returns {{pk_transactions: 12, fk_user:34, description: "Detalle", amount: 11.25}}
 */
const posttransactions = async (pk_transactions, fk_user, description, amount) => {
const {body} = req;

try{
    const transacciones = new Transaction.posttransactions(pk_transactions, fk_user, description, amount);
    await transacciones.save();

    res.json(transacciones);
} catch (error){
    console.log(error);
    res.status(500).json({
        msg: 'Falló al postear'
    })
} }

module.exports = {
    getUser,
    createUser,
    putUser,
    deleteUser,
    gettransactions,
    puttransactions,
    gettransaction,
    posttransactions
  

}