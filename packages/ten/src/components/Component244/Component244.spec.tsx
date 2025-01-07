import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component244 } from './Component244';

describe('Component244', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component244 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component244 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
