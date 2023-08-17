import Express from "express";
import scrapePlayers from "../../../scrapePlayers.js";
import LogCombiner from "../../../LogCombiner.js";
import got from "got";

const groupSearchRouter = new Express.Router();
const baseURL = "https://api.collectionlog.net/collectionlog/user/"

groupSearchRouter.get("/:groupName", async (req, res) => {
    const logs = [];
    try {
        const players = await scrapePlayers(req.params.groupName);
        console.log(players);
        for (const player of players) {
            console.log(player);
            const log = await got(`${baseURL}${player}`);
            const parsedLog = JSON.parse(log.body);
            logs.push(parsedLog);
        }
        console.log(logs)
        const logCombiner = new LogCombiner(logs);
        const combinedLog = logCombiner.combine();
        res.status(200).json(combinedLog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ errors: error });
    }
})

export default groupSearchRouter;