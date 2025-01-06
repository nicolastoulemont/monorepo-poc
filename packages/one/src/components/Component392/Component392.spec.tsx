import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component392 } from "./Component392"

describe("Component392", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component392 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component392 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
