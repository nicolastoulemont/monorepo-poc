import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component218 } from './Component218';

describe('Component218', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component218 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component218 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
