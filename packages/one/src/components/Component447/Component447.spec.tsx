import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component447 } from "./Component447"

describe("Component447", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component447 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component447 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
