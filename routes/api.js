//routing to match up requests to the server and returns response in .json format

//require express library
let express = require('express')

// imports index.js from models directory, which imports Item model
let db = require('../models')

let BudgetItem = db.BudgetItem

//create router
let router = express.Router()

//get data
router.get('/budget_Items', function(req, res, next){
    BudgetItem.findAll({order: ['date']}).then( budgetItems => {
        return res.json(budgetItems)
    }).catch( err => next(err) )
})

//add data
router.post('/budget_Items', function(req, res, next) {
    console.log(req.body)
    BudgetItem.create(req.body).then( () => {
        res.status(201).send('ok')
    }).catch( err => next(err) )
})

//remove data
router.delete('/budget_Items/:id', function(req, res, next){
    BudgetItem.destroy({where: {id: req.params.id}})
        .then( rowsModified => {
            return res.send('ok')
        }).catch( err => next(err) )
})

let SpendGoal = db.SpendGoal

//get data
router.get('/spend_goals', function(req, res, next){
    SpendGoal.findAll({order: ['month']}).then( spendGoals => {
        return res.json(spendGoals)
    }).catch( err => next(err) )
})

//add data
router.post('/spend_goals', function(req, res, next) {
    console.log(req.body)
    SpendGoal.create(req.body).then( () => {
        res.status(201).send('ok')
    }).catch( err => next(err) )
})

//remove data
router.delete('/spend_goals\':id', function(req, res, next){
    SpendGoal.destroy({where: {id: req.params.id}})
        .then( rowsModified => {
            return res.send('ok')
        }).catch( err => next(err) )
})


//export the router
module.exports = router