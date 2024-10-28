// src/components/Button.tsx
import React from 'react';
  // Import CSS file for animations

interface ButtonProps {
    label: string;
    onClick: () => void;
    backgroundColor?: string;
    color?: string;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    style?: React.CSSProperties;
}

const sizeStyles: Record<string, React.CSSProperties> = {
    small: {
        padding: '5px 10px',
        fontSize: '12px',
    },
    medium: {
        padding: '10px 15px',
        fontSize: '14px',
    },
    large: {
        padding: '15px 20px',
        fontSize: '16px',
    },
};

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    backgroundColor = 'blue',
    color = 'white',
    size = 'medium',
    disabled = false,
    style,
}) => {
    const buttonStyle: React.CSSProperties = {
        backgroundColor,
        color,
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...sizeStyles[size],
        ...style,
    };

    return (
        <button
            className={`custom-button ${disabled ? 'disabled' : ''}`} // Add custom button class
            style={buttonStyle}
            onClick={disabled ? undefined : onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
