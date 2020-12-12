import React, { useContext, useState } from 'react'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { WebSocketContext }  from '../WebSocket'

function JobForm() {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
    })

    const ws = useContext(WebSocketContext)

    const onChangeData = (key, val) => {
        setFormData({
            ...formData,
            [key]: val
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        ws.createNewJob(formData)
    }

    return (
        <form onSubmit={onSubmit}>
            <Grid>
                <Grid item xs={12}>
                    <TextField
                        value={formData.title}
                        label="Titulo"
                        onChange={e => onChangeData('title', e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        value={formData.description}
                        placeholder="Descripcion"
                        multiline
                        onChange={e => onChangeData('description', e.target.value)}
                    />
                </Grid>
                <Button type="submit" variant="contained" color="primary">
                    Registrar
                </Button>
            </Grid>
        </form>
    )
}

export default JobForm
