import {createAction} from "./base"
import {ADD_SITE} from "./types/sites"

/**
 * Add a new site to the store.
 *
 * @param site
 * @returns {{type: *}}
 * @constructor
 */
export const AddSite = site => createAction(ADD_SITE, {site})
