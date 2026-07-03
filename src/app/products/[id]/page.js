import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronLeftIcon, StarIcon } from '@heroicons/react/24/solid';
import { getProductById } from '@/app/features/products/services/productApi';
import FavoriteButton from '@/app/features/products/components/FavoriteButton';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const product = await getProductById(id);

    return {
        title: product ? `${product.title} | FakeStore` : 'Product Not Found',
        description: product?.description || 'View product information.',
    };
}

export default async function ProductDetailPage({ params }) {
    const { id } = await params;
    const product = await getProductById(id);
    if (!product) {
        notFound();
    }

    const { title, price, description, category, image, rating } = product;

    return (
        <article className="max-w-5xl mx-auto space-y-6 py-4 animate-fade-in">
            <div className="flex">
                <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors group"
                >
                    <ChevronLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                    Back to Catalog
                </Link>
            </div>

            <main className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-xs">
                <section className="relative w-full aspect-square bg-slate-50 rounded-xl overflow-hidden p-8 flex items-center justify-center">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-w-5xl) 50vw, 100vw"
                        className="object-contain p-4 mix-blend-multiply"
                        priority
                    />
                </section>

                <section className="flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                        <header className="flex flex-wrap items-center gap-2">
                            <span className="text-xs uppercase tracking-wider font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                                {category}
                            </span>
                            {rating && (
                                <div className="flex items-center gap-1 text-sm font-semibold text-slate-700 bg-amber-50 px-2.5 py-1 rounded-md">
                                    <StarIcon className="h-4 w-4 text-amber-500" />
                                    {rating.rate} <span className="text-slate-400 font-normal">({rating.count} reviews)</span>
                                </div>
                            )}
                        </header>

                        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            {title}
                        </h1>

                        <p className="text-3xl font-black text-slate-950">
                            ${price.toFixed(2)}
                        </p>

                        <hr className="border-slate-100" />

                        <div className="space-y-2">
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Description</h3>
                            <p className="text-base text-slate-600 leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </div>

                    <footer className="flex flex-col sm:flex-row gap-3 pt-4">
                        <button className="flex-1 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-99 text-white font-semibold text-sm rounded-xl shadow-sm transition-all cursor-pointer">
                            Add to Shopping Cart
                        </button>

                        <FavoriteButton productId={id} />
                    </footer>
                </section>
            </main>
        </article>
    );
}