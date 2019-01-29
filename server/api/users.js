const router = require('express').Router()
const { User } = require('../db/models')
const Sequelize = require('sequelize')

const Op = Sequelize.Op
module.exports = router

router.get('/', async (req, res, next) => {
    try {
        let users
        if (req.user.isAdmin) {
            users = await User.findAll({
                attributes: ['id', 'email', 'firstName', 'lastName', 'isAdmin'],
                where: {
                    id: {
                        [Op.ne]: req.user.id
                    }
                }
            })
        } else {
            users = await User.findAll({
                // explicitly select only the id and email fields - even though
                // users' passwords are encrypted, it won't help if we just
                // send everything to anyone who asks!
                attributes: ['id', 'email']
            })
        }
        res.json(users)
    } catch (err) {
        next(err)
    }
})