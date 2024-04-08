import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import UserNameDisplay from '../features/UserNameDisplay';

describe('UserNameDisplay Component', () => {
  const userName = 'John Doe';

  test('renders with provided name', () => {
    render(<UserNameDisplay name={userName} />);
    expect(screen.getByText(`Hi, ${userName}`)).toBeInTheDocument();
  });
});