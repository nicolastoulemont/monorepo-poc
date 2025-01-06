import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component336 } from "./Component336"

describe("Component336", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component336 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component336 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
