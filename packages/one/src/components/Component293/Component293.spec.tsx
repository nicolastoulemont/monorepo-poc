import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component293 } from "./Component293"

describe("Component293", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component293 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component293 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
