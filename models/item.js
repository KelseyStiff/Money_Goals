//defines database columns and data types for BudgetItem database
module.exports = (sequelize, DataTypes) => {

    let BudgetItem = sequelize.define('BudgetItem', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        income: {
            type:DataTypes.BOOLEAN,
            allowNull: false
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