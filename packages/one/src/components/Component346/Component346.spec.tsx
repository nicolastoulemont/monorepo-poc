import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component346 } from "./Component346"

describe("Component346", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component346 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component346 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
