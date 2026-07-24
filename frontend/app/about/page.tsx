"use client";

import { useEffect, useState } from "react";

type AboutData = {
    app: string;
    version: string;
};

export default function About() {
    const [about, setAbout] = useState<AboutData | null>(null);

    useEffect(() => {
        fetch("http://localhost:5000/about")
            .then((res) => res.json())
            .then((data) => setAbout(data));
    }, []);

    if (!about) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h1>About</h1>

            <h2>App Name: {about.app}</h2>

            <p>Version: {about.version}</p>
        </div>
    );
}