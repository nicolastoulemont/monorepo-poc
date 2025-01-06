import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component342 } from "./Component342"

describe("Component342", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component342 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component342 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
