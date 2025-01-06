import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component313 } from "./Component313"

describe("Component313", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component313 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component313 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
