import { Category } from "./cat.model"



const getCategories=async()=>{
    const result=await Category.find({})

    return result
}

export const getCatServices={
    getCategories
}