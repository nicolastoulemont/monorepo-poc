import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component499 } from "./Component499"

describe("Component499", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component499 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component499 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
