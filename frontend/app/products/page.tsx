"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

type Product = {
    _id: string;
    name: string;
    price: number;
    description: string;
    stock: number;
    image: string;
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

    if (loading) {
        return <p>Loading...</p>;
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
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-48 h-48 object-cover rounded"
                        />
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




// import AddToCartButton from "@/components/AddToCartButton";

// export default async function ProductsPage() {
//   const res = await fetch("http://localhost:5000/products");
//   const products = await res.json();

//   return (
//     <main>
//       {products.map((product: any) => (
//         <div key={product._id}>
//           <h2>{product.name}</h2>

//           <AddToCartButton id={product._id} />
//         </div>
//       ))}
//     </main>
//   );
// }