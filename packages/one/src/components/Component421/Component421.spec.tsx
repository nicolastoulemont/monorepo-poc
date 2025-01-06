import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component421 } from "./Component421"

describe("Component421", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component421 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component421 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
