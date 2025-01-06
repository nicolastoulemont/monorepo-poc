import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component419 } from "./Component419"

describe("Component419", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component419 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component419 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
