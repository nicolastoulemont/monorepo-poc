import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component281 } from "./Component281"

describe("Component281", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component281 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component281 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
