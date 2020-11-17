import { 
    ADD_JOB, 
    CREATE_JOB
} from '../ActionTypes'

export const createJob = job => ({
    type: CREATE_JOB,
    payload: job
})

export const addJobToList = job => ({
    type: ADD_JOB,
    payload: job
})