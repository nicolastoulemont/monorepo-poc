import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component243 } from './Component243';

describe('Component243', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component243 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component243 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
