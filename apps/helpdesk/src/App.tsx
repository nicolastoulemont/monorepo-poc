import "@poc/one/dist/index.css"
import "@poc/two/dist/index.css"
import { ComponentContainer } from "@poc/one"
import { ComponentContainer as ComponentContainer2 } from "@poc/two"

export function App() {
  return (
    
    <div className="min-h-screen w-full">
      <h1>Hello World</h1>
      <ComponentContainer />
      <ComponentContainer2 />
    </div>
  )
}


