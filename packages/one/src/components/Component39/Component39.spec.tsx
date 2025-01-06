import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component39 } from "./Component39"

describe("Component39", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component39 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component39 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
