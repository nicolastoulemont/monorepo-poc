import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component151 } from "./Component151"

describe("Component151", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component151 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component151 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
