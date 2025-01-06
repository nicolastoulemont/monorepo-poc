import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component451 } from "./Component451"

describe("Component451", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component451 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component451 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
