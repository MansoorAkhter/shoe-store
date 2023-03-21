import Link from "next/link";
import React from "react";

const ProductCard = () => {
    return (
        <Link href="/product/1"
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <img src="/product-1.webp" alt="Product Image" className="w-full" />
            <div className="text-black/90 p-4">
                <h2 className="text-lg font-medium">Product Name</h2>
                <div className="flex items-center text-black/50">
                    <h3 className="text-lg font-semibold mr-2">$40.00</h3>
                    <h3 className="text-base font-medium line-through">$45.00</h3>
                    <h3 className="ml-auto text-base font-medium text-green-500">20% off</h3>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
