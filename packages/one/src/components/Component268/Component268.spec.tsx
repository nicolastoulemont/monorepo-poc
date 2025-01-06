import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component268 } from "./Component268"

describe("Component268", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component268 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component268 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
