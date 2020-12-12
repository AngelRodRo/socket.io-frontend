
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

    if (!socket) {
        
        socket = io.connect(WS_BASE);
        console.log(socket);
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