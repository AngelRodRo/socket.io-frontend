import {
    ADD_JOB
} from '../ActionTypes'

const initialState = {
    jobs: [],
}

export default function (state = initialState, action) {
    switch(action.type) {
        case ADD_JOB:
            break;
        default:
            return state;
    }
}