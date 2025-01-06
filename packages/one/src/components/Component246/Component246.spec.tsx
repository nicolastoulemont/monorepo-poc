import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component246 } from "./Component246"

describe("Component246", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component246 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component246 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
