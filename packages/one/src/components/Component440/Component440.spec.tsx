import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component440 } from './Component440';

describe('Component440', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component440 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component440 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
