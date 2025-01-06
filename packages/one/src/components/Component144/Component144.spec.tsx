import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component144 } from "./Component144"

describe("Component144", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component144 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component144 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
