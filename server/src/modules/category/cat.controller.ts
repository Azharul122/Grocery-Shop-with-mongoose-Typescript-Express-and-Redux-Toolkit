import { Request, Response } from "express";
import catchError from "../../utils/catchError";
import { getCatServices } from "./cat.services";


const getCategories=catchError(
    async(req:Request,res:Response)=>{
        const data=await getCatServices.getCategories()
        res.status(200).json({
            success:true,
            message:"Ok",
            data
        })
    }
)

export const categoryControllers={
    getCategories
}