import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component112 } from './Component112';

describe('Component112', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component112 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component112 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
