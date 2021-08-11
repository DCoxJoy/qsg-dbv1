const Qsguide =require('../models/Qsguide')

//@desc  Get all Quick Start Guide Documents
// @route GET /api/v1/qsguides
// @access Public
exports.getQsguides = async (req, res, next) => {

    try {
        const qsguides = await Qsguide.find();

        res.status(200).json({ success: true, data: qsguides })
    } catch (err) {
        res.status(400).json({success: false})
    }

    
    
}

//@desc  Get all Quick Start Guide Documents
// @route GET /api/v1/qsguides/:id
// @access Public
exports.getQsguide = async (req, res, next) => {
    try {
        const qsguide = await Qsguide.findById(req.params.id)

        if (!qsguide) {
            return res.status(400).json({success: false })
        }
        res.status(200).json({ success: true, data: qsguide})

    } catch (err) {
        res.status(400).json({success: false})
    }

    
}

//@desc  Create Quick Start Guide Documents
// @route POST /api/v1/qsguides/:id
// @access Private
exports.createQsguide = async (req, res, next) => {

    try {
        const qsguide = await Qsguide.create(req.body);

        res.status(201).json({
        success: true,
        data: qsguide
    })
    } catch (err) {
        res.status(400).json({success: false})
    }
    


}