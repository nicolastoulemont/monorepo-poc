import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component272 } from './Component272';

describe('Component272', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component272 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component272 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
