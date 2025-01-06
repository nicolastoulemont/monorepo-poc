import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component95 } from "./Component95"

describe("Component95", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component95 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component95 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
