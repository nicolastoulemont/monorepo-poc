import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component448 } from "./Component448"

describe("Component448", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component448 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component448 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
