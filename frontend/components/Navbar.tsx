import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-center gap-6 bg-gray-900 p-4 text-white">
            <Link href="/">Landing</Link>

            <Link href="/home">Home</Link>

            <Link href="/products">Products</Link>

            <Link href="/login">Login</Link>

            <Link href="/about">About</Link>
        </nav>
    );
}