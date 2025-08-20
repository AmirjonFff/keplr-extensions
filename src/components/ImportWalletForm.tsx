import { useState, type FormEvent } from "react";

export default function ImportWalletForm() {
    const [walletKey, setWalletKey] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Wallet key:", walletKey);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md w-full bg-white p-6 rounded-2xl shadow-lg mx-auto mt-10"
        >
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter your wallet key
            </label>
            <textarea
                value={walletKey}
                onChange={(e) => setWalletKey(e.target.value)}
                placeholder="Paste your wallet key here..."
                className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700 transition"
            >
                Import Wallet
            </button>
        </form>
    );
}
