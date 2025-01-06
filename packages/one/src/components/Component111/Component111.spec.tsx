import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component111 } from "./Component111"

describe("Component111", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component111 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component111 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
