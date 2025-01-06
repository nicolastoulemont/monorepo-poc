import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component157 } from "./Component157"

describe("Component157", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component157 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component157 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
