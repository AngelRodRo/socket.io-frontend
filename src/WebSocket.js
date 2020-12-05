
import React, { createContext, memo } from 'react'
import io from 'socket.io-client'

import { WS_BASE } from './config'
import { useDispatch } from 'react-redux'
import { addJobToList, createJob } from './state/actions/jobs'

const WebSocketContext = createContext(null)

export { WebSocketContext }

const ADD_JOB_EVENT = 'add-job'
const NEW_JOB_EVENT = 'new-job'

const WebSocketConfig = memo(({ children }) => {
    let socket
    let ws
    debugger
    const dispatch = useDispatch()

    const createNewJob = (job) => {
        socket.emit(ADD_JOB_EVENT, job)
        dispatch(createJob(job))
    }

    if (!socket) {
        socket = io(WS_BASE);
        socket.on(NEW_JOB_EVENT, (job) => {
            debugger
            dispatch(addJobToList(job))
        })

        ws = {
            socket,
            createNewJob
        }
    }

    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
})

export default WebSocketConfig