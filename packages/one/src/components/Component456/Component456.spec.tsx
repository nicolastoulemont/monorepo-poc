import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component456 } from "./Component456"

describe("Component456", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component456 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component456 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
