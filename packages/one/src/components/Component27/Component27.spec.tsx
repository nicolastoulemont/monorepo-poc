import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component27 } from "./Component27"

describe("Component27", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component27 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component27 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
