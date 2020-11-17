
import React, { createContext } from 'react'
import io from 'socket.io-client';
import { WS_BASE } from '../config';
import { useDispatch } from 'react-redux';
import { updateChatLog } from './state/actions';

const WebSocketContext = createContext(null)

export { WebSocketContext }

export default ({ children }) => {
    let socket;
    let ws;

    const dispatch = useDispatch();

    const addJob = (job) => {
        const payload = {
            data: job
        }
        socket.emit("event://add-job", JSON.stringify(payload));
        dispatch(updateChatLog(payload));
    }

    if (!socket) {
        socket = io.connect(WS_BASE)

        socket.on("event://get-message", (msg) => {
            const payload = JSON.parse(msg);
            dispatch(updateChatLog(payload));
        })

        ws = {
            socket: socket,
            sendMessage
        }
    }

    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
}