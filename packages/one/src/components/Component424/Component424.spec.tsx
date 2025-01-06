import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component424 } from "./Component424"

describe("Component424", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component424 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component424 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
