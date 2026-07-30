"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function AddProductPage() {
    const router = useRouter();
    const { token } = useAuth();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState<File | null>(null);

    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleImageChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setError("");

        if (!token) {
            router.push("/login");
            return;
        }

        if (!image) {
            setError("Please select an image.");
            return;
        }

        try {
            setIsSubmitting(true);

            const formData = new FormData();

            formData.append("name", name);
            formData.append("price", price);
            formData.append("description", description);
            formData.append("stock", stock);
            formData.append("image", image);

            const response = await fetch(
                "http://localhost:5000/products",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: formData,
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Failed to add product"
                );
            }

            router.push("/products");
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Something went wrong.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="p-10">
            <h1 className="mb-6 text-4xl font-bold">
                Add Product
            </h1>

            <form
                onSubmit={handleSubmit}
                className="max-w-md space-y-4"
            >
                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full rounded border p-2"
                />

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    className="w-full rounded border p-2"
                />

                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) =>
                        setDescription(e.target.value)
                    }
                    required
                    className="w-full rounded border p-2"
                    rows={4}
                />

                <input
                    type="number"
                    placeholder="Stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    required
                    className="w-full rounded border p-2"
                />

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                    className="w-full"
                />

                {error && (
                    <p className="font-bold text-red-600">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isSubmitting
                        ? "Adding Product..."
                        : "Add Product"}
                </button>
            </form>
        </main>
    );
}