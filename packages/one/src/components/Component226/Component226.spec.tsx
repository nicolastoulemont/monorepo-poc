import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component226 } from "./Component226"

describe("Component226", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component226 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component226 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
