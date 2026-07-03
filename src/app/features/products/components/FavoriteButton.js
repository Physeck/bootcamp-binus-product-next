"use client";

import { useState, useEffect } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

export default function FavoriteButton({ productId }) {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

        setIsFavorite(favorites.includes(productId));
    }, [productId]);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

        let updatedFavorites;

        if (isFavorite) {
            updatedFavorites = [...new Set([...favorites, productId])];
        } else {
            updatedFavorites = favorites.filter((id) => id !== productId);
        }

        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }, [isFavorite, productId]);

    return (
        <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
        >
            {isFavorite ? (
                <HeartSolidIcon className="w-6 h-6 text-red-500" />
            ) : (
                <HeartIcon className="w-6 h-6 text-gray-500" />
            )}
        </button>
    );
}