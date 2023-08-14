import Express from "express";
import got from "got";
const collectionLogRouter = new Express.Router();

const baseURL = "https://api.collectionlog.net/collectionlog/user/"

collectionLogRouter.get("/:username", async (req, res) => {
    try {
        console.log(req.params.username)
        const collectionLog = await got(`${baseURL}${req.params.username}`)
        res.status(200).json(collectionLog.body)
    } catch (error) {
        console.error(error)
        res.status(500).json({ errors: error })
    }
})

export default collectionLogRouter;