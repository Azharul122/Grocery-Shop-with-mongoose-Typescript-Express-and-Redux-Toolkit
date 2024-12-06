import React, { useState } from 'react';
import MianContainer from './MianContainer';
import { useFetchCategoryQuery } from '../redux/features/category/categoryApi';
import { useFetchProductsQuery } from '../redux/features/product/productApi';
import { Product, Category } from '../types';
import { Link } from 'react-router-dom';

const FreshProducts = () => {
    const [category, setCategory] = useState<string>('all');

    const { data: categoryData, isLoading: isCategoryLoading, isError: isCategoryError } = useFetchCategoryQuery();
    const { data: productsData, isLoading: isProductLoading, isError: isProductError } = useFetchProductsQuery();

    // Handle loading state
    if (isCategoryLoading || isProductLoading) {
        return <div>Loading...</div>;
    }


    // Handle error state
    if (isCategoryError || isProductError) {
        return <div>Error loading data. Please try again later.</div>;
    }


    // Extract categories and products
    const categories: Category[] = categoryData?.data || [];
    const products: Product[] = productsData?.data?.slice(0, 9) || [];

    // Filter products based on selected category
    const categoryBaseFilterProduct =
        category === 'all'
            ? products
            : products.filter((product) => String(product.categoryId) === category);

    return (
        <div className='py-10'>
            <MianContainer>
                <div className="flex justify-center flex-col gap-3 ">
                    <p className="text-primary rounded-md ">Our Products</p>
                    <h2 className="text-3xl">Our Fresh Products</h2>
                    <p className="max-w-[350px]">
                        We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad
                        ingredients.
                    </p>

                    {/* Category Buttons */}
                    <div className="flex gap-2 items-center flex-wrap shrink-0">
                        <button
                            onClick={() => setCategory('all')}
                            className={`px-3 py-1 ${category === 'all' ? 'bg-primary text-white rounded-md min-w-10' : ''}`}
                        >
                            All
                        </button>
                        {categories.map((scategory) => (
                            <button
                                key={scategory.id}
                                onClick={() => setCategory(String(scategory.id))}
                                className={`px-3 py-1 outline-none border-0 ${category === String(scategory.id) ? 'bg-primary transition-all duration-300 text-white w-24 ' : ''}`}
                            >
                                {scategory.categoryName}

                            </button>
                        ))}
                    </div>

                    {/* Products */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {categoryBaseFilterProduct.map((product) => (
                            <Link to={`product-details/${product._id}`} className="md:p-5 p-3 text-center relative group " key={product._id}>
                                <img className='h-[150px] w-full' src={product.images[0]} alt={product.productName} />
                                <p>{product.productName}</p>
                                <p>${product.price}/kg</p>

                                <div className="hidden group-hover:block absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black text-white ">

                                    <button className="bg-secondary py-2 px-4 absolute left-1/2 -translate-x-1/2 bottom-4 w-[80%] mx-auto">Add to Cart</button>
                                </div>
                            </Link>

                        ))}
                    </div>
                </div>
            </MianContainer>
        </div>
    );
};

export default FreshProducts;
