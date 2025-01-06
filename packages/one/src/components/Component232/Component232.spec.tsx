import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component232 } from "./Component232"

describe("Component232", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component232 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component232 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
