import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component140 } from './Component140';

describe('Component140', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component140 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component140 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
