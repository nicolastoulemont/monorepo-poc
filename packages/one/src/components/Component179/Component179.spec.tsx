import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component179 } from "./Component179"

describe("Component179", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component179 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component179 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
