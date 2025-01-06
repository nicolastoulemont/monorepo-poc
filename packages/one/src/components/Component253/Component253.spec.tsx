import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component253 } from "./Component253"

describe("Component253", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component253 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component253 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
