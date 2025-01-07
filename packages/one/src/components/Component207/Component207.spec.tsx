import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component207 } from './Component207';

describe('Component207', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component207 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component207 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
