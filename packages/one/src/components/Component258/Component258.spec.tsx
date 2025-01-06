import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component258 } from './Component258';

describe('Component258', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component258 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component258 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
