import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component340 } from "./Component340"

describe("Component340", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component340 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component340 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
