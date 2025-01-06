import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component81 } from "./Component81"

describe("Component81", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component81 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component81 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
