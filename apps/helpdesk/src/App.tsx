import "@poc/one/dist/index.css"
import "@poc/two/dist/index.css"
import { ComponentContainer } from "@poc/one"
import { ComponentContainer as ComponentContainer2 } from "@poc/two"
import { ComponentContainer as ComponentContainer3 } from "@poc/three"
export function App() {
  return (
    
    <div className="min-h-screen w-full">
      <h1>Hello world!</h1>
      <ComponentContainer />
      <ComponentContainer2 />
      <ComponentContainer3 />
    </div>
  )
}


