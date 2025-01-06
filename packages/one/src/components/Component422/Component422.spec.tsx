import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component422 } from "./Component422"

describe("Component422", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component422 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component422 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
