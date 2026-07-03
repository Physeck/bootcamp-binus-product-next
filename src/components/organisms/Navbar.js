export default function Navbar() {
    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-xs">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-shrink-1 h-16 items-center justify-between">
                    <span className="cursor-default select-none text-xl font-extrabold tracking-tight bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        FakeStore
                    </span>
                </div>
            </div>
        </header>
    );
}