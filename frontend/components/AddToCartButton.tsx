"use client";

export default function AddToCartButton({
    id,
}: {
    id: string;
}) {
    return (
        <button
            onClick={() =>
                console.log("Add to cart", id)
            }
        >
            Add to Cart
        </button>
    );
}