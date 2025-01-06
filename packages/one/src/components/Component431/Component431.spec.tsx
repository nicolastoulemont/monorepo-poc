import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component431 } from "./Component431"

describe("Component431", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component431 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component431 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
