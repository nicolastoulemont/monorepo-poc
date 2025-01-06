import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component205 } from "./Component205"

describe("Component205", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component205 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component205 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
