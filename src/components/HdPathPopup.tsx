import { useState } from "react";

type HdPathPopupProps = { visible: boolean; onClose: () => void };

export function HdPathPopup({ visible, onClose }: HdPathPopupProps) {
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