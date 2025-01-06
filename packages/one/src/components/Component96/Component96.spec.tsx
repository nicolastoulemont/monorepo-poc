import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component96 } from "./Component96"

describe("Component96", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component96 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component96 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
