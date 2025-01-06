import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component295 } from "./Component295"

describe("Component295", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component295 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component295 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
