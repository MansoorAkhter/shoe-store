import { useRouter } from "next/router";
import React from "react";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";

const Category = () => {

    return (
        <div className="w-full md:py-20">
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <h1 className="leading-tight text-[28px] md:text-[34px] mb-5 font-semibold">
                        Running Shoes
                    </h1>
                </div>

                {/* Product Grid Start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                {/* Product Grid End */}
            </Wrapper>
        </div>);
};

export default Category;
