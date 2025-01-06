import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component197 } from "./Component197"

describe("Component197", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component197 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component197 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
