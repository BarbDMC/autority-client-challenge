import React from 'react';

interface CustomButtonProps {
  color?: string;
  text?: string;
  styles?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  color = 'bg-indigo-600',
  text = '',
  styles = '',
  onClick = () => {},
}) => {
  const className = `my-20 h-11 w-full ${color} text-white text-xl font-bold rounded-lg font-['Inter'] ${styles}`;

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;