import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component311 } from "./Component311"

describe("Component311", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component311 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component311 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
