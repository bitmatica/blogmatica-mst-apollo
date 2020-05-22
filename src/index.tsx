import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
// https://github.com/mobxjs/mobx-react-lite/#observer-batching
import "mobx-react-lite/batchingForReactDom"

ReactDOM.render(<App />, document.getElementById("root"))
