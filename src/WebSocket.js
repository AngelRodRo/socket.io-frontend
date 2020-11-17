
import React, { createContext } from 'react'
import io from 'socket.io-client'

import { WS_BASE } from './config'
import { useDispatch } from 'react-redux'
import { addJobToList, createJob } from './state/actions/jobs'

const WebSocketContext = createContext(null)

export { WebSocketContext }

const WebSocketConfig = ({ children }) => {
    let socket
    let ws

    const dispatch = useDispatch()

    const createNewJob = (job) => {
        const payload = {
            data: job
        }
        socket.emit('event://add-job', JSON.stringify(payload))
        dispatch(createJob(payload))
    }

    if (!socket) {
        socket = io.connect(WS_BASE)

        socket.on('event://new-job', (msg) => {
            const payload = JSON.parse(msg)
            dispatch(addJobToList(payload))
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
}

export default WebSocketConfig