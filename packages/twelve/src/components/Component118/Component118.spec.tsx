import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component118 } from './Component118';

describe('Component118', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component118 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component118 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
