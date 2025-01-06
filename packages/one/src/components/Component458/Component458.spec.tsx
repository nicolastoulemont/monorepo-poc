import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component458 } from "./Component458"

describe("Component458", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component458 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component458 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
