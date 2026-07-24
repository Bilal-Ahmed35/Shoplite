"use client";

import { useEffect, useState } from "react";

type User = {
    _id: string;
    name: string;
    email: string;
};

export default function HomePage() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {

        const fetchUser = async () => {

            const token = localStorage.getItem("token");

            const response = await fetch(
                "http://localhost:5000/api/auth/me",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            setUser(data);

        };

        fetchUser();

    }, []);

    return (
        <main className="p-10">
            <h1 className="text-4xl font-bold">
                Home
            </h1>

            {user && (
                <div className="mt-6 rounded border p-4">
                    <h2>{user.name}</h2>

                    <p>{user.email}</p>
                </div>
            )}
        </main>
    );
}