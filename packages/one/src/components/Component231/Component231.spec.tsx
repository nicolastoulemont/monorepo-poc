import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component231 } from "./Component231"

describe("Component231", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component231 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component231 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
