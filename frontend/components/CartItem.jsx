import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItem = () => {
    return (
        <div className="flex py-5 gap-3 md:gap-5 border-b ">
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                <Image src="/product-1.webp" alt="shoe" width={120} height={120} className="rounded-lg" />
            </div>

            <div className="w-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Product Title */}
                    <div className="text-lg md:text-2xl font-semibold text-black/80">Jordan Retro 6 G</div>

                    {/* Subtitle */}
                    <div className="text-sm md:text-lg font-medium text-black/50 block md:hidden">Men&apos;s Golf Shoes</div>

                    {/* PRODUCT PRICE */}
                    <div className="text-sm md:text-lg font-bold text-black/50 mt-2">
                        $: 20.00
                    </div>
                </div>

                {/* Subtitle */}
                <div className="text-lg font-medium text-black/50 hidden md:block">Men&apos;s Golf Shoes</div>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 md:gap-10 text-black/50 text-sm md:text-lg">
                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Size:</div>
                            <select className="hover:text-black">
                                <option value="1">UK 6</option>
                                <option value="2">UK 6.5</option>
                                <option value="3">UK 7</option>
                                <option value="4">UK 8</option>
                                <option value="5">UK 9</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Quantity:</div>
                            <select className="hover:text-black">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>

                    <RiDeleteBin6Line className="cursor-pointer text-black/50 hover:text-black text-[16px] md:text-[20px]" />
                </div>

            </div>
        </div>
    );
};

export default CartItem;
