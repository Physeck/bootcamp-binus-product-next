import Link from "next/link";
import Image from 'next/image';

export default function ProductCard({ product }) {

    const { id, title, price, image, category, rating } = product;

    return (
        <article className="m-4 max-w-xs rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
            <header className="rounded-t-lg relative bg-gray-50 pt-[100%] w-full overflow-hidden group">
                <Image src={image}
                    alt={category}
                    fill
                    sizes="(max-w-2xl) 25vw, 33vw"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105" />
            </header>

            <div className="px-4 pt-2">
                <header className="py-2 text-base text-slate-600">
                    <h2 className="text-base font-semibold text-slate-800 line-clamp-2 hover:text-blue-600 min-h-[3rem] transition-colors">
                        <Link href={`/products/${id}`}>
                            {title}
                        </Link>
                    </h2>
                </header>
                <p className="text-sm text-yellow-400">
                    ★ {rating.rate} <span className="text-slate-400">({rating?.count})</span>
                </p>

                <p className="text-xl font-bold text-slate-900">
                    ${price.toFixed(2)}
                </p>
            </div>

            <footer className="flex gap-2 px-4 py-4">
                <Link
                    href={`/products/${id}`}
                    className="flex-1 text-center px-4 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-lg transition-colors hover:bg-blue-700 active:scale-98"
                >
                    View Details
                </Link>
            </footer>
        </article>
    )
}