// Default state

import {createReducer, updateObject} from "./base"
import {ADD_SITE} from "../actions/types/sites"

const sitesInitialState = [
    {
        id: "veluwe-villa-multisite",
        project: "veluwe-villa-multisite",
        paths: {
            project: "/Users/jordy/workspace/veluwe-villa-multisite",
            configFile: "/Users/jordy/workspace/veluwe-villa-multisite/wp-config.php",
        },
        version: "4.8.1",
    },
    {
        id: "kaliber",
        project: "Kaliber",
        paths: {
            project: "/Users/jordy/workspace/Kaliber",
            configFile: "/Users/jordy/workspace/Kaliber/wp-config.php",
        },
        version: "4.8.1",
    },
]

/**
 * Add a site to the state.
 *
 * @param sitesState
 * @param site
 * @returns {Array<Lodash.T|Lodash.any>|{}[]|string|T[]}
 */
const addSite = (sitesState, {site}) => sitesState.concat(updateObject(site, {id: site.project}))

const sites = createReducer(sitesInitialState, {
    [ADD_SITE]: addSite,
})

export default sites
