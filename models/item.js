//defines database columns and data types for BudgetItem database
module.exports = (sequelize, DataTypes) => {

    let BudgetItem = sequelize.define('BudgetItem', {
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        amount: {
            type: DataTypes.NUMBER,
            allowNull: true
        },
        income: {
            type:DataTypes.BOOLEAN,
            allowNull: true
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date: {
            type:DataTypes.DATE
        }

    })

    BudgetItem.sync({force: true}).then( () => {
        console.log('synced budget expenses table')
    })

    return BudgetItem
}