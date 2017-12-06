import React from "react"
import VisibleSiteList from "../../VisibleSiteList"
import VersionTabs from "../../VersionTabs"
import StyledUpdateButton from "./styled/UpdateButton"

const Home = () => <div className="HomeView">
    <VersionTabs/>
    <VisibleSiteList/>
    <StyledUpdateButton/>
</div>

export default Home
