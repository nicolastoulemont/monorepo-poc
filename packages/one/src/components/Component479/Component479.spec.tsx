import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component479 } from "./Component479"

describe("Component479", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component479 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component479 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
