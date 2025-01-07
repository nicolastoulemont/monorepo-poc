import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component83 } from './Component83';

describe('Component83', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component83 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component83 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
