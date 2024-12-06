import express from "express"
import { categoryControllers } from "./cat.controller"

const router=express.Router()

router.get("/category",categoryControllers.getCategories)


export const categoryRoutes=router