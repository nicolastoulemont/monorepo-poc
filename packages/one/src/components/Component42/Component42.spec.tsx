import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component42 } from "./Component42"

describe("Component42", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component42 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component42 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
