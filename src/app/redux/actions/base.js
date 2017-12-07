/**
 * Create an action.
 *
 * @param type
 * @param data
 * @returns {{type: *}}
 */
export const createAction = (type, data) => {
    return {
        type,
        ...data
    }
}
