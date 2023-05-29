import express, { Router } from "express";
import { editUser, getUserById, getUserByUsernameLike } from "../use-cases/user.use-case";

const router: Router = express.Router();

router.get("/search/", async (req, res) => {
    const { username } = req.query;
    const user = await getUserByUsernameLike(username?.toString() !== undefined ? username?.toString() : "");
    if (user == undefined) return res.status(404).json({ status: "error", message: "user not found" });
    return res.status(200).json({
        status: "success",
        data: user
    });
});


router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const user = await getUserById(parseInt(`${id}`));
    if (user == undefined) return res.status(404).json({ status: "error", message: "user not found" });
    return res.status(200).json({
        status: "success",
        data: user
    });
});

router.patch("/:emailOrId", async (req, res) => {
    const emailOrId = req.params.emailOrId;
    const { password, lastName, name, string, progresoCurso1, notaCurso1, notaCurso2, notaCurso3, progresoCurso2, progresoCurso3 } = req.body;
    const user = await editUser(parseInt(`${emailOrId}`), { password, lastName, name, progresoCurso1, notaCurso1, notaCurso2, notaCurso3, progresoCurso2, progresoCurso3 });
    if (user == undefined) return res.status(404).json({ status: "error", message: "user not found" });
    return res.status(200).json({
        status: "success",
        data: user
    });
});

export const UserController = router;