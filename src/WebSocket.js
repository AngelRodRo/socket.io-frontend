
import React, { useEffect, createContext, memo } from 'react'
import io from 'socket.io-client'

import { WS_BASE } from './config'
import { useDispatch } from 'react-redux'
import { addJobToList, createJob } from './state/actions/jobs'

const WebSocketContext = createContext(null)

export { WebSocketContext }

const ADD_JOB_EVENT = 'add-job'
const NEW_JOB_EVENT = 'new-job'

const WebSocketConfig = memo(({ children }) => {
    let socket = {};
    const dispatch = useDispatch();

    const createNewJob = (job) => {
        socket.emit(ADD_JOB_EVENT, job)
        dispatch(createJob(job))
    };

    const ws = {
        socket,
        createNewJob
    };

    useEffect(() => {
        if (!socket) {
            socket = io(WS_BASE);
    
            socket.on(NEW_JOB_EVENT, (job) => {
                dispatch(addJobToList(job))
            });
        }
    }, []);

    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
})

export default WebSocketConfig