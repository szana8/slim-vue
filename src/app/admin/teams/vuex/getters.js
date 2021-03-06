/**
 * Return the teams array from the state
 * 
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
export const teams = (state) => {
    return state.teams
}

/**
 * Return a team object from the state
 * 
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
export const team = (state) => {
    return state.team
}

/**
 * [description]
 * @param  {[type]} state [description]
 * @return {[type]}       [description]
 */
export const action = (state) => {
    if ( state.team.id != null )
        state.action = 'Update'
    else
        state.action = 'Insert'

    return state.action
}