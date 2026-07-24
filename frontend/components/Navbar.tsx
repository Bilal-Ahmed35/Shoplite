"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
    const { logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    return (
        <nav className="flex justify-center gap-6 bg-gray-900 p-4 text-white">
            <Link href="/">Landing</Link>

            <Link href="/home">Home</Link>

            <Link href="/products">Products</Link>

            <Link href="/login">Login</Link>

            <Link href="/about">About</Link>

            <button
                onClick={handleLogout}
                className="bg-red-600 px-3 py-1 rounded"
            >
                Logout
            </button>
        </nav>
    );
}