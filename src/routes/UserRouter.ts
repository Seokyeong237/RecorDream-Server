import { Router } from "express";
import { body } from "express-validator";
import { UserController } from "../controllers";

const router: Router = Router();

router.get("/", UserController.getUser);
router.put("/nickname", [body("nickname").trim().notEmpty()], UserController.updateNickname);
router.put("/:toggle", UserController.changeToggle);
router.put("/:userId/fcm-token", UserController.updateFcmToken);

export default router;
