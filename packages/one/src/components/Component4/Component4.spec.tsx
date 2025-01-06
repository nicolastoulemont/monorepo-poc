import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component4 } from "./Component4"

describe("Component4", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component4 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component4 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
