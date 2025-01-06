import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component362 } from "./Component362"

describe("Component362", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component362 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component362 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
