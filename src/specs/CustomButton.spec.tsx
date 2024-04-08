import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomButton from '../components/CustomButton/CustomButton';

describe('CustomButton Component', () => {
  test('displays provided text', () => {
    const testText = 'Click Me!';
    render(<CustomButton text={testText} />);
    expect(screen.getByRole('button')).toHaveTextContent(testText);
  });

  test('button is disabled when disabled prop is true', () => {
    render(<CustomButton disabled={true} />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('onClick prop function is called when button is clicked', () => {
    const handleClick = jest.fn();
    render(<CustomButton onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('onClick is not called when button is disabled', () => {
    const handleClick = jest.fn();
    render(<CustomButton onClick={handleClick} disabled={true} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
