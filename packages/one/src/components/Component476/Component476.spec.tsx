import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component476 } from './Component476';

describe('Component476', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component476 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component476 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
