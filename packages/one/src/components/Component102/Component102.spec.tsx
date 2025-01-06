import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component102 } from "./Component102"

describe("Component102", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component102 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component102 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
