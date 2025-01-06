import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component271 } from "./Component271"

describe("Component271", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component271 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component271 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
