import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component20 } from "./Component20"

describe("Component20", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component20 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component20 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
