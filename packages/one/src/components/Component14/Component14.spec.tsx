import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component14 } from "./Component14"

describe("Component14", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component14 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component14 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
