export const dynamic = 'force-dynamic';
import { getProduct } from "./features/products/services/productApi";
import HomeClientLayout from "@/components/organisms/HomeClientLayout";

export default async function HomePage() {
    let products = [];
    let error = null;

    try {
        products = await getProduct(5);
    } catch (err) {
        console.error('Failed to fetch products:', err);
        error = err.message;
    }

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

            {error ? (
                <div className="text-center py-16 bg-red-50 border border-red-200 rounded-2xl">
                    <p className="text-red-600 text-lg font-medium">Unable to load products</p>
                    <p className="text-red-500 text-sm mt-2">{error}</p>
                </div>
            ) : (
                <HomeClientLayout initialProducts={products} />
            )}
        </section>
    );
}
