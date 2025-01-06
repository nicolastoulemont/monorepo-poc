import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component22 } from "./Component22"

describe("Component22", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component22 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component22 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
