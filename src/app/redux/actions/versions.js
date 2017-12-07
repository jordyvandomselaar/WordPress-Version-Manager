import {ADD_DETECTED_VERSION, SET_LAST_VERSION, SET_SELECTED_VERSION} from "./types/versions"
import {createAction} from "./base"

/**
 * Set selected version action.
 *
 * @param version
 * @returns {{type, version: *}}
 */
export const setSelectedVersion = version => createAction(SET_SELECTED_VERSION, {version})

/**
 * Set the last WordPress version.
 *
 * @param version
 * @returns {{type, version: *}}
 */
export const setLastVersion = version => createAction(SET_LAST_VERSION, {version})

/**
 * Add a new detected version to the store.
 *
 * @param version
 * @returns {{type: *}}
 */
export const addDetectedVersion = version => createAction(ADD_DETECTED_VERSION, {version})
