import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component103 } from "./Component103"

describe("Component103", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component103 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component103 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
