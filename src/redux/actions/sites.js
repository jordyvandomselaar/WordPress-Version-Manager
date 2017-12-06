import {createAction} from "./base"
import {ADD_SITE} from "./types/sites"

export const AddSite = site => createAction(ADD_SITE, {site})
