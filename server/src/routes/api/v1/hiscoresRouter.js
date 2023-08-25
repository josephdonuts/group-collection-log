import Express from "express";
import Hiscore from "../../../models/Hiscore.js";

const hiscoresRouter = new Express.Router();

hiscoresRouter.get("/", async (req, res) => {
    try {
        const hiscores = await Hiscore.query().orderBy("uniques", "desc");
        res.status(200).json({ hiscores: hiscores });
    } catch (error) {
        console.error(error);
        res.status(500).json({ errors: error });
    }
})

export default hiscoresRouter;