import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import collectionLogRouter from "./api/v1/collectionLogRouter.js";
import groupSearchRouter from "./api/v1/groupSearchRouter.js";
import hiscoresRouter from "./api/v1/hiscoresRouter.js";

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);

//place your server-side routes here
rootRouter.use("/api/v1/log", collectionLogRouter);
rootRouter.use("/api/v1/group", groupSearchRouter);
rootRouter.use("/api/v1/hiscores", hiscoresRouter);

export default rootRouter;
