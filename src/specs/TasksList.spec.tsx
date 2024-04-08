import '@testing-library/jest-dom';
import TasksList from '../features/tasks/TasksList';
import { render, screen, fireEvent } from '@testing-library/react';


jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    });
  }
}));


const unCompleteTaskMock = [{ id: 1, name: 'Task 1', isComplete: false }]
const completeTaskMock = [{ id: 2, name: 'Task 2', isComplete: true }];

describe('TasksList Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders tasks and reflects uncompletion status correctly', () => {
    render(<TasksList tasks={unCompleteTaskMock} title="Todo" onDeleteTask={() => {}} onCompleteTask={() => {}} />);
    
    expect(screen.getByText('Todo - 1')).toBeInTheDocument();
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 1')).not.toHaveClass('line-through');
  });

  test('renders tasks and reflects completion status correctly', () => {
    render(<TasksList tasks={completeTaskMock} title="Done" onDeleteTask={() => {}} onCompleteTask={() => {}} />);
    
    expect(screen.getByText('Done - 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toHaveClass('line-through');
  });

  test('calls onCompleteTask with correct task object when checkbox is clicked', () => {
    const mockOnCompleteTask = jest.fn();
    const tasks = [{ id: 'task1', name: 'Task 1', isComplete: false }];
    
    render(<TasksList tasks={tasks} title="Test Tasks" onDeleteTask={() => {}} onCompleteTask={mockOnCompleteTask} />);
    
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    
    expect(mockOnCompleteTask).toHaveBeenCalledTimes(1);
    expect(mockOnCompleteTask).toHaveBeenCalledWith(tasks[0]);
  });

  test('calls onDeleteTask with correct task ID when delete icon is clicked', () => {
    const mockOnDeleteTask = jest.fn();

    render(
      <TasksList
        tasks={completeTaskMock}
        title="Test Tasks"
        onDeleteTask={mockOnDeleteTask}
        onCompleteTask={() => {}}
      />
    );

    const deleteIcons = screen.getAllByTestId('delete-icon');
    fireEvent.click(deleteIcons[0]);

    expect(mockOnDeleteTask).toHaveBeenCalledTimes(1);
    expect(mockOnDeleteTask).toHaveBeenCalledWith(2);
  });
});
