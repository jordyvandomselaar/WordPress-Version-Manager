import React from "react"
import ReactDOM from "react-dom"
import App from "./app/components/App/index"
import registerServiceWorker from "./registerServiceWorker"
import Store from "./app/redux/store/index"

ReactDOM.render(
    <Store>
        <App/>
    </Store>
    , document.getElementById("root"))
registerServiceWorker()
