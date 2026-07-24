"use client";

import { useEffect, useState } from "react";

type User = {
    name: string;
    role: string;
};

export default function HomePage() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        fetch("http://localhost:5000/user")
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, []);

    return (
        <main className="p-10">
            <h1 className="text-4xl font-bold">
                Home
            </h1>

            {user && (
                <div className="mt-6 rounded border p-4">
                    <h2>{user.name}</h2>

                    <p>{user.role}</p>
                </div>
            )}
        </main>
    );
}