import {
    ADD_JOB,
} from '../ActionTypes'

const initialState = {
    jobs: [],
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case ADD_JOB:
            return { ...state, jobs: [...state.jobs, action.payload] }
        default:
            return state
    }
}