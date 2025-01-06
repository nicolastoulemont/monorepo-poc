import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component160 } from "./Component160"

describe("Component160", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component160 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component160 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
