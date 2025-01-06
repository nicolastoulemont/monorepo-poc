import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component280 } from "./Component280"

describe("Component280", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component280 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component280 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
