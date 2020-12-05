import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

import Card from '@material-ui/core/Card'

const StyledCard = Styled(Card)`
    max-width: 700px;
    margin: 20px auto;
    padding: 10px;
`

function Job(props) {
    const { title, description } = props

    return (
        <StyledCard>
            <h1>{title}</h1>
            <p>{description}</p>
        </StyledCard>
    )
}

Job.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Job
