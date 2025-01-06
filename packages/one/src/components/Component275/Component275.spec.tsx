import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component275 } from "./Component275"

describe("Component275", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component275 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component275 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
