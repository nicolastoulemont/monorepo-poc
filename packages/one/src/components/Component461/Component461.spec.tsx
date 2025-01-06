import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component461 } from "./Component461"

describe("Component461", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component461 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component461 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
