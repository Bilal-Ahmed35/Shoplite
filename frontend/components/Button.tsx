type ButtonProps = {
    text: string;
    color: string;
};

export default function Button({ text, color }: ButtonProps) {
    return (
        <button className={`rounded ${color} px-4 py-2 text-white`}>
            {text}
        </button>
    );
}