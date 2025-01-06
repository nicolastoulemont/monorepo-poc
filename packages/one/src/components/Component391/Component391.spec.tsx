import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component391 } from "./Component391"

describe("Component391", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component391 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component391 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
