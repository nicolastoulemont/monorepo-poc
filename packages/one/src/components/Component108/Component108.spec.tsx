import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component108 } from './Component108';

describe('Component108', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component108 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component108 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
