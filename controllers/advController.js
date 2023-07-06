const Adv = require('../models/advModel')
const mongoose = require('mongoose')


// get all adv 
const getAdvs = async (req,res) => {
    const advs = await Adv.find({}).sort('createdAt: -1')
    res.status(200).json(advs)
}

// get single adv 
const getAdv = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'adv not found'})
    }

    const adv = await Adv.findById(id)

    if (!adv) {
        return res.status('404').json({error:'no adv found'})
    }

    res.status(200).json(adv)
}



// create new adv 

const createAdv = async (req, res) => {
    const {title,author,year_published} = req.body

    let emptyFields = []
    if(!title) {
        emptyFields.push('title')
    }

    if(!author) {
        emptyFields.push('author')
    }

    if(!year_published) {
        emptyFields.push('year_published')
    }

    if (emptyFields.length > 0){
        return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    }

    try{
        const adv = await Adv.create({title,author,year_published})
        res.status(200).json(adv)

    }catch(error){
        res.status(400).json({error: error.message})
    }
}


// delete adv 
const deleteAdv = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'adv not found'})
    }

    const adv = await Adv.findOneAndDelete({_id:id})

    if(!adv){
        return res.status(400).json({error: 'no such adv'})
    }

    res.status(200).json(adv)

}


//update adv 

const updateAdv = async (req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'adv not found'})
    }
    const adv = await Adv.findOneAndUpdate({_id:id}, {
        ...req.body
    })
    
    if(!adv){
        return res.status(400).json({error: 'no such adv'})
    }
    
    res.status(200).json(adv)
}






module.exports = {
    createAdv,
    getAdvs,
    getAdv,
    deleteAdv,
    updateAdv
}