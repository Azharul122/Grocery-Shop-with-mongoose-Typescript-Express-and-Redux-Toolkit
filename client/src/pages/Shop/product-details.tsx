import { useParams } from "react-router-dom"
import MianContainer from "../../components/MianContainer"
import { useFetchCategoryQuery } from "../../redux/features/category/categoryApi"
import { useFetchProductsQuery } from "../../redux/features/product/productApi"


const ProductDetails = () => {
    const { isLoading:isCategoryLoading, data: cateGoryData } = useFetchCategoryQuery()
    const { isLoading:isProductLoading, data: ProductData } = useFetchProductsQuery()

    const {productId}=useParams()
    if (isCategoryLoading || isProductLoading) {
        return <div>Loading.......</div>
    }

    if (!cateGoryData && !ProductData) {
        return null
    }

    
    const product = ProductData?.data.find(product=>product._id===productId)

    console.log(product)
  return (
        <div className="pt-24 pb-10">
            <MianContainer>
                <div className="grid md:col-span-2 grid-cols-1 items-center">
                    <div className="col-span-1">
                        <img className="h-[300px]" src="/images/5.png" alt="" />
                    </div>
                    <div className="col-span-1">
                        <p>{ }</p>
                    </div>
                </div>
            </MianContainer>
        </div>
    )
}

export default ProductDetails