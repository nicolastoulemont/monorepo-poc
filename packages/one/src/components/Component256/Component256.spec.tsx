import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component256 } from "./Component256"

describe("Component256", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component256 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component256 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
