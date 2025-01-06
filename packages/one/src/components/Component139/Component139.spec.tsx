import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component139 } from "./Component139"

describe("Component139", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component139 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component139 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
