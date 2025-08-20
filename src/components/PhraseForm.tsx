import { WordField } from "./WordField";

type PhraseFormProps = {
    wordCount: number;
    words: string[];
    onWordChange: (index: number, value: string) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, index: number) => void;
    onPaste: (e: React.ClipboardEvent<HTMLInputElement>, index: number) => void;
    inputsRef: React.MutableRefObject<Array<HTMLInputElement | null>>;
    onHdPathClick: () => void;
};

export function PhraseForm({ wordCount, words, onWordChange, onKeyDown, onPaste, inputsRef, onHdPathClick }: PhraseFormProps) {
    return (
        <form className="login__form">
            <div className="login__fields">
                {Array.from({ length: wordCount }).map((_, i) => (
                    <WordField
                        key={i}
                        index={i}
                        value={words[i]}
                        onChange={onWordChange}
                        onKeyDown={onKeyDown}
                        onPaste={onPaste}
                        ref={(el) => (inputsRef.current[i] = el)}
                    />
                ))}
            </div>
            <button type="button" className="btn login__path-btn" onClick={onHdPathClick}>
                Set Derivation Path (Advanced)
            </button>
            <button type="submit" className="login__submit-btn btn btn--one" disabled={!words.slice(0, wordCount).every(Boolean)}>
                Import
            </button>
        </form>
    );
}
