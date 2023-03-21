import React from "react";
import ProductDetailCarousel from "@/components/ProductDetailCarousel";
import Wrapper from "@/components/Wrapper";
import { IoMdHeartEmpty } from "react-icons/io";
import RelatedProducts from "@/components/RelatedProducts";

const ProductDetails = () => {
    return <div className="w-full md:py-20">
        <Wrapper>
            <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                {/* LEFT */}
                <div className="flex-[1.5] w-full max-w-[500px] lg:max-w-full md:w-auto mx-auto lg:mx-0">
                    <ProductDetailCarousel />
                </div>

                {/* RIGHT */}
                <div className="flex-[1] py-3">
                    {/* Product Title */}
                    <h1 className="text-[34px] font-semibold mb-2">Jordan Retro 6 G</h1>

                    {/* Product Subtitle */}
                    <h4 className="text-lg font-semibold mb-5">Men&apos;s Golf Shoes</h4>
                    {/* Product Price */}
                    <h5 className="text-lg font-semibold">MRP: $40.00</h5>
                    <div className="text-md font-medium text-black/50">incl. of taxes</div>
                    <div className="text-md font-medium text-black/50 mb-20">{`(Also includes all applicable duties)`}</div>

                    {/* Size Range Start*/}
                    <div className="mb-10">
                        {/* Heading */}
                        <div className="flex justify-between mb-2">
                            <div className="text-md font-semibold">Select Size</div>
                            <div className="text-md font-medium text-black/50 cursor-pointer">Select Guide</div>
                        </div>

                        {/* Size Start */}
                        <div className="grid grid-cols-3 gap-2">
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">UK 6</div>
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">UK 6</div>
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">UK 6</div>
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">UK 6</div>
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">UK 6</div>
                            {/* Disable Size */}
                            <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">UK 6</div>
                        </div>
                        {/* Size End */}

                        {/* Show Error Start */}
                        <div className="text-red-600 font-semibold mt-1">Size selection is required</div>
                    </div>
                    {/* Size Range End */}

                    {/* Add to Cart Button Start */}
                    <button
                        className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                        Add to Cart
                    </button>
                    {/* Add to Cart Button End */}

                    {/* Wishlist Button Start */}
                    <button className="w-full rounded-full py-4 border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                        Wishlist
                        <IoMdHeartEmpty size={20} />
                    </button>
                    {/* Wishlist Button End */}

                    {/* Product Detail */}
                    <div>
                        <div className="text-lg font-bold mb-5">Product Details</div>
                        <p className="mb-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error suscipit non consectetur numquam esse atque, magni, cumque perspiciatis magnam asperiores, ipsum iste. Vel ipsam recusandae voluptates eius, molestiae eaque placeat.</p>
                        <p className="mb-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error suscipit non consectetur numquam esse atque, magni, cumque perspiciatis magnam asperiores, ipsum iste. Vel ipsam recusandae voluptates eius, molestiae eaque placeat.</p>
                    </div>
                </div>
                {/* RIGHT END */}
            </div>
            <RelatedProducts />
        </Wrapper>
    </div>;
};

export default ProductDetails;
