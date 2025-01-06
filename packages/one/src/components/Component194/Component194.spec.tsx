import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component194 } from "./Component194"

describe("Component194", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component194 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component194 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
