import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component3 } from "./Component3"

describe("Component3", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component3 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component3 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
