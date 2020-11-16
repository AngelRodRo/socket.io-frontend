import React from 'react'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function JobForm() {
    return (
        <form>
            <Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Titulo"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        placeholder="Descripcion"
                        multiline
                    />
                </Grid>
                <Button type="submit" />
            </Grid>
        </form>
    )
}

export default JobForm
