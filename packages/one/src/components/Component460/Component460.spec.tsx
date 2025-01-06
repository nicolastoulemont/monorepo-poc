import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component460 } from "./Component460"

describe("Component460", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component460 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component460 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
