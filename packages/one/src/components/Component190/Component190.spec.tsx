import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component190 } from "./Component190"

describe("Component190", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component190 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component190 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
