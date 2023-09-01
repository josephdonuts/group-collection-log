import Express, { response } from "express";
import scrapePlayers from "../../../scrapePlayers.js";
import LogCombiner from "../../../LogCombiner.js";
import axios from "axios";
import Hiscore from "../../../models/Hiscore.js";

const groupSearchRouter = new Express.Router();
const baseURL = "https://api.collectionlog.net/collectionlog/user/"

groupSearchRouter.get("/:groupName", async (req, res) => {
    const logs = [];
    try {
        const scrapeData = await scrapePlayers(req.params.groupName);
        for (const player in scrapeData.players) {
            try {
                const response = await axios.get(`${baseURL}${scrapeData.players[player]}`)
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
        if (scrapeData.players.length === 0)
            logCombiner.groupExists = false;
        else
            logCombiner.groupExists = true;
        logCombiner.prestige = scrapeData.isPrestiged;
        //not ideal # of queries but it works
        try {
            if (logCombiner.groupExists && !(await Hiscore.query().findOne({ groupName: req.params.groupName }))) {
                await Hiscore.query().insert({
                    groupName: req.params.groupName,
                    uniques: logCombiner.uniqueItems,
                    prestige: logCombiner.prestige,
                })
            } else if (logCombiner.groupExists && (await Hiscore.query().findOne({ groupName: req.params.groupName }))) {
                await Hiscore.query().update({
                    uniques: logCombiner.uniqueItems,
                    prestige: logCombiner.prestige,
                }).where({ groupName: req.params.groupName })
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ errors: error });
        }
        res.status(200).json(logCombiner);
    } catch (error) {
        console.error(error);
        res.status(500).json({ errors: error });
    }
})

export default groupSearchRouter;