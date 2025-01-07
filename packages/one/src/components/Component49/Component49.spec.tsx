import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component49 } from './Component49';

describe('Component49', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component49 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component49 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
