"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

    const router = useRouter();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const login = async () => {

        const response = await fetch(
            "http://localhost:5000/api/auth/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    email,
                    password,
                }),
            }
        );

        const data = await response.json();

        if (data.token) {

            localStorage.setItem(
                "token",
                data.token
            );

            router.push("/home");

        }

    };

    return (

        <main className="p-10">

            <h1 className="text-3xl font-bold mb-6">
                Login
            </h1>

            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 block mb-4"
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 block mb-4"
            />

            <button
                onClick={login}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Login
            </button>

        </main>

    );

}