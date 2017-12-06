import {connect} from "react-redux"
import Tabs from "../Tabs/index"
import {setSelectedVersion} from "../../redux/actions/versions"

const mapStateToProps = state => {
    let items = state.versions.detected.map(version => {
        return {
            label: version,
            value: version,
        }
    })

    items = [{label: "Show all", value: ""}].concat(items)

    return {
        items: items,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: version => dispatch(setSelectedVersion(version)),
    }
}

const VersionTabs = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Tabs)

export default VersionTabs
