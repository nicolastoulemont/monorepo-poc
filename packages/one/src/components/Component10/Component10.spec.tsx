import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component10 } from "./Component10"

describe("Component10", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component10 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component10 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
