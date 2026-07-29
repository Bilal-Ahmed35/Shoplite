"use client";

export default function AddToCartButton({
    id,
}: {
    id: string;
}) {
    return (
        <button
            onClick={() =>
                console.log(id)
            }
        >
            Add to Cart
        </button>
    );
}