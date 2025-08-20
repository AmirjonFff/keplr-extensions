import { useState } from "react";

type WordFieldProps = {
  index: number;
  value: string;
  onChange: (index: number, value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, index: number) => void;
  onPaste: (e: React.ClipboardEvent<HTMLInputElement>, index: number) => void;
};

export function WordField({ index, value, onChange, onKeyDown, onPaste }: WordFieldProps) {
  const [show, setShow] = useState(false);

  return (
      <div className="login__field-item">
          <div className="login__field-number">{index + 1}.</div>
          <input
              type={show ? "text" : "password"}
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