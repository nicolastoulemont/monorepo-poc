import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component489 } from "./Component489"

describe("Component489", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component489 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component489 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
