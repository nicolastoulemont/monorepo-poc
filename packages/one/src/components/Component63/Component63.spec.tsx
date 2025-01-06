import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component63 } from "./Component63"

describe("Component63", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component63 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component63 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
