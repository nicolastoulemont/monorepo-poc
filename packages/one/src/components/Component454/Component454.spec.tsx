import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component454 } from "./Component454"

describe("Component454", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component454 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component454 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
