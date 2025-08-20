import type { FormEvent } from "react";

type KeyFormProps = { keyValue: string; onChange: (v: string) => void };
export function KeyForm({ keyValue, onChange }: KeyFormProps) {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        window.alert('Invalid private key\nPlease check your key and try again!');
    };

    return (
        <form className="login__form" onSubmit={handleSubmit}>
            <input type="text" className="input" value={keyValue} onChange={(e) => onChange(e.target.value)} />
            <button type="submit" className="login__submit-btn btn btn--one" disabled={!keyValue}>
                Import
            </button>
        </form>
    );
}