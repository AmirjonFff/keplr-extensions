type KeyFormProps = { keyValue: string; onChange: (v: string) => void };
export function KeyForm({ keyValue, onChange }: KeyFormProps) {
    return (
        <form className="login__form">
            <input type="text" className="input" value={keyValue} onChange={(e) => onChange(e.target.value)} />
            <button type="submit" className="login__submit-btn btn btn--one" disabled={!keyValue}>
                Import
            </button>
        </form>
    );
}