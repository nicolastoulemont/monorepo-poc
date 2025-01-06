import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component379 } from "./Component379"

describe("Component379", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component379 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component379 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
