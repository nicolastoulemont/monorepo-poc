import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component325 } from './Component325';

describe('Component325', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component325 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component325 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
