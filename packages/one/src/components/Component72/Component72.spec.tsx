import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component72 } from "./Component72"

describe("Component72", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component72 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component72 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
