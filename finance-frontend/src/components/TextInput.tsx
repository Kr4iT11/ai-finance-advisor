import React from "react";

interface TextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ label, name, value, onChange, type = 'text',required = false }) => (
    <div className="form-group">
        <label htmlFor={name}></label>
        <input
            type={type}
            className="form-control"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={label}
            required={required}
        />
    </div>   
);

export default TextInput;