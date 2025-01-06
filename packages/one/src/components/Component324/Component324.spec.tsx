import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component324 } from "./Component324"

describe("Component324", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component324 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component324 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
