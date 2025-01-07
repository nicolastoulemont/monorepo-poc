import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component177 } from './Component177';

describe('Component177', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component177 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component177 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
