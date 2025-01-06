import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component36 } from "./Component36"

describe("Component36", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component36 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component36 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
