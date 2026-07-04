"use client";

import { useState } from 'react';
import ProductCard from '@/components/molecules/ProductCard';
import SearchBar from '../molecules/SearchBar';


export default function HomeClientLayout({ initialProducts = [] }) {
    const [searchQuery, setSearchQuery] = useState('');

    const products = Array.isArray(initialProducts) ? initialProducts : [];

    const filteredProducts = products.filter((product) =>
        product?.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />

            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-white border border-slate-100 rounded-2xl shadow-xs">
                    <p className="text-slate-400 text-lg">
                        {products.length === 0 ? 'No products available.' : 'No matching products found.'}
                    </p>
                </div>
            )}
        </div>
    );
}