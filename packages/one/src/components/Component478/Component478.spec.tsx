import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component478 } from './Component478';

describe('Component478', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component478 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component478 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
