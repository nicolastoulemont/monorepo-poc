import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component61 } from './Component61';

describe('Component61', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component61 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component61 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
