import express from "express"
import { authControllers } from "./controller.auth"

const router=express.Router()


router.post("/register",authControllers.register)
router.post("/login",authControllers.login)


export const authRoutes=router