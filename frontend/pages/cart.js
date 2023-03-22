import Image from "next/image";
import Link from "next/link";
import CartItem from "@/components/CartItem";
import Wrapper from "@/components/Wrapper";

const Cart = () => {
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                {/* Heading Start*/}
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <h1 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">Shopping Cart</h1>
                </div>
                {/* Heading End*/}

                {/* CART content Start */}
                <div className="flex flex-col lg:flex-row gap-12 py-10">
                    {/* Cart Items */}
                    <div className="flex-[2]">
                        <h3 className="text-lg font-bold">Cart Items</h3>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>

                    {/* Cart Summary */}
                    <div className="flex-[1]">
                        <h3 className="text-lg font-bold">Summary</h3>

                        <div className="p-5 my-5 bg-black/5 rounded-xl">
                            <div className="flex justify-between">
                                <div className="uppercase text-sm md:text-lg font-medium text-black">Subtotal</div>
                                <div className="text-sm md:text-lg font-medium text-black">$: 60.00</div>
                            </div>

                            <div className="text-sm md:text-lg py-5 border-t mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, deleniti doloremque ullam tempora saepe labore porro sequi, amet, iure aliquid reprehenderit. Architecto labore voluptatibus esse eius aspernatur quidem repudiandae at!
                            </div>
                        </div>

                        {/* Checkout Button */}
                        <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">Checkout
                        </button>

                    </div>
                </div>
                {/* CART content End*/}

                {/* Empty Cart Screen */}
                <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                    <Image src="/empty-cart.jpg" width={300} height={300} className="w-[300px] md:w-[400px]" />
                    <span className="text-xl font-bold">Your cartis empty</span>
                    <span className="text-center mt-4">
                        Looks like you have not added anything in your cart.
                        <br />
                        Go ahead and explore top categories.
                    </span>

                    <Link href="/" className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8">Continue Shopping</Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Cart;