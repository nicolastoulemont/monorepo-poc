import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component369 } from './Component369';

describe('Component369', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component369 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component369 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
