"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

type Product = {
    _id: string;
    name: string;
    price: number;
};

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState("");

    const router = useRouter();
    const { token, loading } = useAuth();

    // Redirect if user is not logged in
    useEffect(() => {
        if (loading) return;

        if (!token) {
            router.push("/login");
        }
    }, [loading, token, router]);

    // Fetch products
    useEffect(() => {
        if (!token) return;

        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/products",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(
                        errorData.message || "Failed to fetch products"
                    );
                }

                const data = await response.json();
                setProducts(data);
            } catch (err: any) {
                setError(err.message);
            }
        };

        fetchProducts();
    }, [token]);

    if (error) {
        return (
            <main className="p-10">
                <h1 className="text-red-600 font-bold">
                    {error}
                </h1>
            </main>
        );
    }

    return (
        <main className="p-10">
            <h1 className="mb-6 text-4xl font-bold">
                Products
            </h1>

            <div className="space-y-4">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="rounded border p-4"
                    >
                        <h2 className="text-xl font-bold">
                            {product.name}
                        </h2>

                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}