import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component73 } from "./Component73"

describe("Component73", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component73 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component73 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
