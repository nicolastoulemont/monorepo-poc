import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component1 } from "./Component1"

describe("Component1", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component1 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component1 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
