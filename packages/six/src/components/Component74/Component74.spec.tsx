import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component74 } from './Component74';

describe('Component74', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component74 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component74 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
