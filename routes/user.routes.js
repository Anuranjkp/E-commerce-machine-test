const express = require("express");
const router = express.Router();
const { userModel } = require("../models/models")

router.post('/add', (req, res) => addModel(req, res));
router.get('/read', (req, res) => readModel(req, res));
router.patch('/update', (req, res) => updateModel(req, res));
router.delete('/delete', (req, res) => deleteModel(req, res));

const addModel = async (req, res) => {
    try {
        let add = await userModel(req.body).save()
        successResponse(res, add)
    } catch (err) {
        errorResponse(res, err)
    }
}
const readModel = async (req, res) => {
    try {
        const data = await userModel.findById(req.query.id);
        if (!data) throw Error('user is not exist');
        successResponse(res, data);
    } catch (error) {
        errorResponse(res, error);
    }
}
const updateModel = async (req, res) => {
    try {
        let updatedModel = await userModel.findByIdAndUpdate(req.query.id, req.body);
        successResponse(res, updatedModel);
    } catch (err) {
        errorResponse(res, err);
    }
}
const deleteModel = async (req, res) => {
    try {
        let deleted = await userModel.findByIdAndDelete(req.query.id)
        successResponse(res, deleted);
    } catch (err) {
        errorResponse(res, err);
    }
}

const successResponse = (res, data) => {
    res.json({ status: "success", data: data })
}
const errorResponse = (res, err) => {
    res.json({ status: "error", error: err })
}

module.exports = router