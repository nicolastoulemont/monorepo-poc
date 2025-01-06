import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component60 } from "./Component60"

describe("Component60", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component60 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component60 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
