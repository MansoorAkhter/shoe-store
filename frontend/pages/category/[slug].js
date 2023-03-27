import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import { fetchData } from "@/utils/api";

const Category = ({ category, products, slug }) => {

    return (
        <div className="w-full md:py-20">
            <Wrapper>
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <h1 className="leading-tight text-[28px] md:text-[34px] mb-5 font-semibold">
                        {category?.data?.[0]?.attributes?.name}
                    </h1>
                </div>

                {/* Product Grid Start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                </div>
                {/* Product Grid End */}
            </Wrapper>
        </div>);
};

export default Category;


export async function getStaticPaths() {
    const category = await fetchData("/api/categories?populate=*");
    const paths = category?.data.map((item) => ({
        params: {
            slug: item.attributes.slug
        }
    }))

    return {
        paths,
        fallback: false
    }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
    const category = await fetchData(`/api/categories?filters[slug][$eq]=${slug}`)
    const products = await fetchData(`/api/products?populate=*&[filters][categories][slug][$eq]=${slug}`)

    return {
        props: {
            category,
            products,
            slug
        }
    }
}