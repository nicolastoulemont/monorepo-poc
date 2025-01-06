import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component153 } from "./Component153"

describe("Component153", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component153 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component153 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
