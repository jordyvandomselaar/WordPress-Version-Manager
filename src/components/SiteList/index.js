import React from "react"
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table"
import PropTypes from "prop-types"


const getTableRows = (sites) =>
    sites.map(site =>
        <TableRow key={site.id}>
            <TableRowColumn>{site.project}</TableRowColumn>
            <TableRowColumn>{site.paths.project}</TableRowColumn>
            <TableRowColumn>{site.paths.configFile}</TableRowColumn>
            <TableRowColumn>{site.version}</TableRowColumn>
        </TableRow>,
    )

const SiteList = ({sites}) =>
    <div className="SiteList">
        <Table multiSelectable>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>Project</TableHeaderColumn>
                    <TableHeaderColumn>Project path</TableHeaderColumn>
                    <TableHeaderColumn>Configfile path</TableHeaderColumn>
                    <TableHeaderColumn>Version</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody deselectOnClickaway={false}>
                {getTableRows(sites)}
            </TableBody>
        </Table>
    </div>

SiteList.propTypes = {
    sites: PropTypes.array.isRequired,
}

export default SiteList
