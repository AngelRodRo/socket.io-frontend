import {
    ADD_JOB,
} from '../ActionTypes'

const initialState = {
    jobs: [],
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case ADD_JOB:
            state.jobs.push(action.payload)
            break;
        default:
            return state;
    }
}