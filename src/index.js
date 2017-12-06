import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"
import Store from "./redux/store"

ReactDOM.render(
    <Store>
        <App/>
    </Store>
    , document.getElementById("root"))
registerServiceWorker()
