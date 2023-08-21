import Express, { response } from "express";
import scrapePlayers from "../../../scrapePlayers.js";
import LogCombiner from "../../../LogCombiner.js";
import axios from "axios";

const groupSearchRouter = new Express.Router();
const baseURL = "https://api.collectionlog.net/collectionlog/user/"

groupSearchRouter.get("/:groupName", async (req, res) => {
    const logs = [];
    try {
        const players = await scrapePlayers(req.params.groupName);
        for (const player of players) {
            console.log(player)
            try {
                const response = await axios.get(`${baseURL}${player}`)
                    if (response.status === 200) {
                        logs.push(response.data);
                    }
                } catch (error) {
                    if (!axios.isAxiosError(error)) //let axios blow up haha
                        throw error
                }
        }  
        const logCombiner = new LogCombiner(logs);
        logCombiner.combine();
        res.status(200).json(logCombiner);
    } catch (error) {
        console.error(error);
        res.status(500).json({ errors: error });
    }
})

export default groupSearchRouter;