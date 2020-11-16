import React from 'react'
import PropTypes from 'prop-types'

import Card from './common/Card'

function Job(props) {
    const { title, description } = props

    return (
        <Card>
            <h1>{title}</h1>
            <p>{description}</p>
        </Card>
    )
}

Job.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Job
