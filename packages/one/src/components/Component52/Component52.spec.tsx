import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component52 } from "./Component52"

describe("Component52", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component52 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component52 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
