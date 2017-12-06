import React from "react"
import HomeView from "../views/Home"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import StyledApp from "./styled/App"

const App = () =>
    <MuiThemeProvider>
        <StyledApp>
            <HomeView></HomeView>
        </StyledApp>
    </MuiThemeProvider>

export default App
