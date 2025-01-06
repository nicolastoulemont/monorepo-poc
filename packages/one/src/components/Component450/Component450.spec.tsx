import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component450 } from "./Component450"

describe("Component450", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component450 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component450 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
