import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component335 } from "./Component335"

describe("Component335", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component335 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component335 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
