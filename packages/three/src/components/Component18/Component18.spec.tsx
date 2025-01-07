import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component18 } from './Component18';

describe('Component18', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component18 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component18 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
