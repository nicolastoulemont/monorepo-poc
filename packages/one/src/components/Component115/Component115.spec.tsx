import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component115 } from "./Component115"

describe("Component115", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component115 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component115 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
