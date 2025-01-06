import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component370 } from "./Component370"

describe("Component370", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component370 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component370 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
