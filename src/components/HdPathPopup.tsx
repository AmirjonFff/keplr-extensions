import { useState } from "react";

type HdPathPopupProps = { visible: boolean; onClose: () => void };

export function HdPathPopup({ visible, onClose }: HdPathPopupProps) {
    const [inputs, setInputs] = useState(["0", "0", "0"]);
    if (!visible) return null;

    const handleChange = (i: number, value: string) => {
        const cleaned = value.replace(/[^0-9.]/g, "");
        const dots = cleaned.split(".").length - 1;
        const finalValue = dots > 1 ? cleaned.split(".")[0] + "." + cleaned.split(".").slice(1).join("") : cleaned;
        setInputs((prev) => prev.map((v, idx) => (idx === i ? finalValue : v)));
    };

    const handleClose = () => {
        if (window.confirm("Are you sure you want to close? All changes will be reset.")) {
            setInputs(["0", "0", "0"]);
            onClose();
        }
    };

    return (
        <div className="popup">
            <button className="popup__close-btn btn" onClick={handleClose}>✕</button>
            <div className="popup__title">Set Custom Derivation Path</div>
            <div className="popup__desc">
                <span>•</span>You can create multiple addresses from one recovery phrase
                <br />
                <span>•</span>A lost path cannot be recovered
                <br />
                <span>•</span>If you're unfamiliar, skip or undo this step - Reset Settings
            </div>
            <div className="popup__bottom-fields">
                <span>m/-'/-'/</span>
                {inputs.map((v, i) => (
                    <span key={i}>
                        <input value={v} onChange={(e) => handleChange(i, e.target.value)} />
                        {i < 2 && <span className="popup__separator">'/</span>}
                    </span>
                ))}
            </div>
        </div>
    );
}