import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component59 } from "./Component59"

describe("Component59", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component59 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component59 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
