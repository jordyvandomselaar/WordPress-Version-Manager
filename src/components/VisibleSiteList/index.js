import {connect} from "react-redux"
import SiteList from "../SiteList"

const mapStateToProps = ({sites, versions}) => {
    const visibleSites = versions.selected === "" ? sites : sites.filter(site => site.version === versions.selected)

    return {
        sites: visibleSites,
    }
}

const VisibleSiteList = connect(
    mapStateToProps,
)(SiteList)

export default VisibleSiteList
