import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component143 } from './Component143';

describe('Component143', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component143 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component143 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
