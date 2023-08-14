import Express from "express";
import scrapePlayers from "../../../scrapePlayers.js";

const groupSearchRouter = new Express.Router();

groupSearchRouter.get("/:groupName", async (req, res) => {
    try {
        const players = await scrapePlayers(req.params.groupName);
        res.status(200).json(players);
    } catch (error) {
        console.error(error);
        res.status(500).json({ errors: error });
    }
})

export default groupSearchRouter;