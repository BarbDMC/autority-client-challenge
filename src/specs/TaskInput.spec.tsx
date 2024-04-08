import '@testing-library/jest-dom';
import TaskInput from '../components/Tasks/TaskInput';
import { render, fireEvent } from '@testing-library/react';

describe('TaskInput Component', () => {
  const mockOnAddTask = jest.fn();

  test('updates state on input change', () => {
    const { getByPlaceholderText } = render(<TaskInput onAddTask={mockOnAddTask} />);
    const inputElement = getByPlaceholderText('Add a new task') as HTMLInputElement;
  
    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    expect(inputElement.value).toBe('New Task');
  });

  test('does not call onAddTask when input is empty', () => {
    const { getByText } = render(<TaskInput onAddTask={mockOnAddTask} />);
    const addButton = getByText('+');
  
    fireEvent.click(addButton);
    expect(mockOnAddTask).not.toHaveBeenCalled();
  });

  test('calls onAddTask with correct task object when add button is clicked', () => {
    const { getByPlaceholderText, getByText } = render(<TaskInput onAddTask={mockOnAddTask} />);
    const inputElement = getByPlaceholderText('Add a new task') as HTMLInputElement;;
    const addButton = getByText('+');
  
    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.click(addButton);
  
    expect(mockOnAddTask).toHaveBeenCalledTimes(1);
    expect(mockOnAddTask).toHaveBeenCalledWith(expect.objectContaining({
      name: 'New Task',
      isComplete: false,
      description: '',
      author: '1',
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date)
    }));

    expect(inputElement.value).toBe('');
  });
});