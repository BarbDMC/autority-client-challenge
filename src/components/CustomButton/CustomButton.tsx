import React from 'react';

interface CustomButtonProps {
  color?: string;
  text?: string;
  styles?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  color = 'bg-indigo-600',
  text = '',
  styles = '',
  onClick = () => {},
  disabled = false,
}) => {
  const className = `h-11 w-full ${color} text-white text-xl font-bold rounded-lg font-['Inter'] ${styles}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default CustomButton;