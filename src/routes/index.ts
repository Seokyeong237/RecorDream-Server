// router index file
import { Router } from "express";
import RecordRouter from "./RecordRouter";
import UserRouter from "./UserRouter";
import VoiceRouter from "./VoiceRouter";
import NoticeRouter from "./NoticeRouter";
import AuthRouter from "./AuthRouter";

const router: Router = Router();

router.use("/voice", VoiceRouter);
router.use("/user", UserRouter);
router.use("/record", RecordRouter);
router.use("/notice", NoticeRouter);
router.use("/auth", AuthRouter);

export default router;
