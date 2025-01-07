import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component67 } from './Component67';

describe('Component67', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component67 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component67 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
