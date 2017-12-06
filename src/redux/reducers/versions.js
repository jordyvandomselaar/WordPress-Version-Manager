// Default state

import {ADD_DETECTED_VERSION, SET_LAST_VERSION, SET_SELECTED_VERSION} from "../actions/types/versions"
import {createReducer, updateObject} from "./base"

const versionsInitialState = {
    detected: [
        "4.9.1", "4.9.0", "4.8.1", "4.5.0",
    ],
    last: "4.9.1",
    selected: "",
}

/**
 * Set the selected version to filter on.
 *
 * @param versionState
 * @param action
 * @returns {{}}
 */
const setSelectedVersion = (versionsState, {version}) => updateObject(versionsState, {selected: version})

/**
 * set last version, this will be the latest WordPress version.
 *
 * @param versionsState
 * @param version
 * @returns {{}}
 */
const setLastVersion = (versionsState, {version}) => updateObject(versionsState, {last: version})

/**
 * Add a new detected version to the store.
 *
 * @param versionsState
 * @param version
 * @returns {{}}
 */
const addDetectedVersion = (versionsState, {version}) => updateObject(versionsState, {detected: versionsState.detected.concat(version)})

const versions = createReducer(
    versionsInitialState,
    {
        [SET_SELECTED_VERSION]: setSelectedVersion,
        [SET_LAST_VERSION]: setLastVersion,
        [ADD_DETECTED_VERSION]: addDetectedVersion,
    },
)

export default versions
