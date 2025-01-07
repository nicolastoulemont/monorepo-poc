import "@poc/one/dist/index.css"
import "@poc/two/dist/index.css"
import { ComponentContainer } from "@poc/one"
import { ComponentContainer as ComponentContainer2 } from "@poc/two"
import { ComponentContainer as ComponentContainer3 } from "@poc/three"
import { ComponentContainer as ComponentContainer4 } from "@poc/four"
import { ComponentContainer as ComponentContainer5 } from "@poc/five"
export function App() {
  return (
    
    <div className="min-h-screen w-full">
      <h1>Hello world!</h1>
      <ComponentContainer />
      <ComponentContainer2 />
      <ComponentContainer3 />
      <ComponentContainer4 />
      <ComponentContainer5 />
    </div>
  )
}


