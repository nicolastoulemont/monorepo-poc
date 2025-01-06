import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component25 } from "./Component25"

describe("Component25", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component25 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component25 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
