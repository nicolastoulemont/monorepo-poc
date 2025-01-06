import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component312 } from './Component312';

describe('Component312', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component312 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component312 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
