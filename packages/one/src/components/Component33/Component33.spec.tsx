import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component33 } from "./Component33"

describe("Component33", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component33 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component33 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
