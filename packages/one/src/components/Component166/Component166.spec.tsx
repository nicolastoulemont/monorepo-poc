import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component166 } from "./Component166"

describe("Component166", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component166 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component166 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
