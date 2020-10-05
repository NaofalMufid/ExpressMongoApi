const express = require('express')
const router = express.Router()
const Subscriber = require('../model/subscriber')

// get all subscribers
router.get('/', async (req, res) => {
    // res.send('Hello World')
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({message : err.message})
    }
})

//  get one subscribers
router.get('/:id', getSubscriber, (req, res) => {
    res.json(res.subscriber)
})

// create one subscribers
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedChannel: req.body.subscribedChannel
    })

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)    
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

// update one subscribers
router.patch('/:id', getSubscriber, async (req, res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }

    if (req.body.subscribedChannel != null) {
        res.subscriber.subscribedChannel = req.body.subscribedChannel
    }

    try {
        const updateSubscriber = await res.subscriber.save()
        res.json(updateSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// delete one subscribers
router.delete('/:id', getSubscriber, async (req, res) => {
    try {
        await res.subscriber.remove()
        res.json({ message: 'Deleted this subscriber' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// middleware
async function getSubscriber(req, res, next) {
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({message: 'Cant find subscriber'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.subscriber = subscriber
    next()
}

module.exports = router