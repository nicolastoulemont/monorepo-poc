import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component483 } from "./Component483"

describe("Component483", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component483 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component483 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
