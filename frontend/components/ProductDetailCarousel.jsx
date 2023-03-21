import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductDetailCarousel = () => {
    return (
        <div className="text-white text-[20px] w-full max-w-7xl mx-auto sticky top-[50px] ">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                <img src="/p1.png" alt="shoe detail view" />
                <img src="/p2.png" alt="shoe detail view" />
                <img src="/p3.png" alt="shoe detail view" />
                <img src="/p4.png" alt="shoe detail view" />
                <img src="/p5.png" alt="shoe detail view" />
                <img src="/p6.png" alt="shoe detail view" />
                <img src="/p7.png" alt="shoe detail view" />
            </Carousel>
        </div>
    );
};

export default ProductDetailCarousel;
