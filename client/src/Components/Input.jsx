import React, { useEffect, useRef } from 'react';

export default function Input({
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    placeholder,
    maxlength,
    required,
    readonly,
    isFocused,
    handleChange,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, [isFocused]);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                className={
                    `focus:outline-none border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm text-sm ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                placeholder={placeholder}
                required={required}
                onChange={(e) => handleChange(e)}
                readOnly={readonly}
                maxLength={maxlength}
            />
        </div>
    );
}
