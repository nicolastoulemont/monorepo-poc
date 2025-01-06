import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component376 } from "./Component376"

describe("Component376", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component376 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component376 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
