import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component477 } from './Component477';

describe('Component477', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component477 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component477 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
