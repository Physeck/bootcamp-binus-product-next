import Navbar from "@/components/organisms/Navbar";
import "../styles/globals.css";

export const metadata = {
    title: "Home | FakeStore Catalog",
    description: "Browse our latest trending products right now!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar></Navbar>
                {children}
            </body>
        </html>
    );
}