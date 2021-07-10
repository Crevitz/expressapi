const router = require("express").Router()
const comments = require("../models/commentModel")

//create
router.post("/create", async(req, res) => {
    try{
        const newComments = new comments({
            text: req.body.text,
            date: req.body.date,
            article: req.body.article,
        })

        const comments = await newComments.save()
        res.status(200).json("comment added")
    }catch(err){
        res.status(500).json(err)
    }
})

//update
router.put("/:id", async(req, res) => {
    if(req.body.commentID === req.params.id){
        try{
            const updatedComment = await Comment.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },{new:true})
            res.status(200).json(updatedComment)

        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(401).json("Edit comment failed")
    }
})

//delete
router.delete("/:id", async(req, res) => {
    if(req.body.commentID === req.params.id){
        try{
            const comment = await Comment.findbyId(req.params.id)
        try{
            await Comment.findByIdAndDelete(req.params.id)
            res.status(200).json("Comment deleted")

        }catch(err){
            res.status(500).json(err)
        }
    }
        catch(err) {
            res.status(404).json("Comment not found")
        }
    }else{
        res.status(401).json("Delete comment failed")
    }
})

//get comment
router.get("/:id", async(req, res) => {
    try{
        const comment = await Comment.findById(req.params.id)
        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router