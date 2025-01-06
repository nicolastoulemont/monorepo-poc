import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component380 } from './Component380';

describe('Component380', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component380 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component380 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
