"use client";

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchBar({ value, onChange }) {
    return (
        <div className="max-w-md mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
                type="text"
                placeholder="Search products by title..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-xs transition-all focus:outline-hidden focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
        </div>
    );
}