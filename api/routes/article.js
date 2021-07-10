const router = require("express").Router()
const article = require("../models/articleModel")

//create
router.post("/create", async(req, res) => {
    try{
        const newArticle = new article({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            comments: req.body.comments,
        })

        const article = await newArticle.save()
        res.status(200).json("article added")
    }catch(err){
        res.status(500).json(err)
    }
})

//update
router.put("/:id", async(req, res) => {
    if(req.body.articleID === req.params.id){
        try{
            const updatedArticle = await article.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },{new:true})
            res.status(200).json(updatedArticle)

        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(401).json("Edit article failed")
    }
})

//delete
router.delete("/:id", async(req, res) => {
    if(req.body.articleID === req.params.id){
        try{
            const article = await Article.findbyId(req.params.id)
        try{
            await Article.findByIdAndDelete(req.params.id)
            res.status(200).json("Article deleted")

        }catch(err){
            res.status(500).json(err)
        }
    }
        catch(err) {
            res.status(404).json("Article not found")
        }
    }else{
        res.status(401).json("Delete article failed")
    }
})

//get article
router.get("/:id", async(req, res) => {
    try{
        const article = await Article.findById(req.params.id)
        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router