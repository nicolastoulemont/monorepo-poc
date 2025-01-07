import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component142 } from './Component142';

describe('Component142', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component142 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component142 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
