import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component220 } from './Component220';

describe('Component220', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component220 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component220 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
