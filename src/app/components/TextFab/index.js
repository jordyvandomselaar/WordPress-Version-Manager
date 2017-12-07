import React from "react"
import FloatingActionButton from "material-ui/FloatingActionButton"
import PropTypes from "prop-types"

const TextFab = ({text, className}) =>
    <div className={className}>
        <FloatingActionButton>
            <span>{text}</span>
        </FloatingActionButton>
    </div>

TextFab.propTypes = {
    text: PropTypes.string.isRequired,
}

export default TextFab
