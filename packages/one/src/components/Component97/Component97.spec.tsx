import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component97 } from './Component97';

describe('Component97', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component97 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component97 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
