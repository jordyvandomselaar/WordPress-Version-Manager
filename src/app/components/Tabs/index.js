import React from "react"
import {Tab, Tabs as TabsPresenter} from "material-ui/Tabs"
import PropTypes from "prop-types"

const Tabs = ({items, ...props}) => {
    const tabs = items.map(tab => <Tab key={tab.value} {...tab}/>)

    return <TabsPresenter {...props}>{tabs}</TabsPresenter>
}

Tabs.propTypes = {
    items: PropTypes.array.isRequired,
}

export default Tabs
