import {connect} from "react-redux"
import TextFab from "../TextFab"

const mapStateToProps = state => {
    return {
        text: state.versions.last,
    }
}

const UpdateButton = connect(
    mapStateToProps,
)(TextFab)

export default UpdateButton
