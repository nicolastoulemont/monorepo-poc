import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component248 } from "./Component248"

describe("Component248", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component248 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component248 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
