import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component443 } from "./Component443"

describe("Component443", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component443 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component443 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
