import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component452 } from "./Component452"

describe("Component452", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component452 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component452 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
