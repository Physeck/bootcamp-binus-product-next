export const dynamic = 'force-dynamic';
import { getProduct } from "./features/products/services/productApi";
import HomeClientLayout from "@/components/organisms/HomeClientLayout";

export default async function HomePage() {

    const products = await getProduct(5);

    return (
        <section className="space-y-8">
            <header className="text-center max-w-2xl mx-auto space-y-3 py-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                    Discover Our Products
                </h1>
                <p className="text-lg text-slate-500">
                    Curated top-quality items sourced directly from the finest collections.
                </p>
            </header>

            <HomeClientLayout initialProducts={products} />
        </section>
    );
}
