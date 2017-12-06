import {connect} from "react-redux"
import SiteList from "../SiteList/index"

const mapStateToProps = ({sites, versions}) => {
    const visibleSites = sites.filter(site => site.version === versions.selected || versions.selected === "")

    return {
        sites: visibleSites,
    }
}

const VisibleSiteList = connect(
    mapStateToProps,
)(SiteList)

export default VisibleSiteList
