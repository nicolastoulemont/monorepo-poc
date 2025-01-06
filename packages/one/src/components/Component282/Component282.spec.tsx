import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component282 } from "./Component282"

describe("Component282", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component282 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component282 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
