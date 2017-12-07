import {createAction} from "./base"
import {ADD_SITE} from "./types/sites"

/**
 *
 * @param site
 * @returns {{type: *}}
 */
export const AddSite = site => createAction(ADD_SITE, {site})
