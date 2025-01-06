import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component149 } from "./Component149"

describe("Component149", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component149 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component149 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
