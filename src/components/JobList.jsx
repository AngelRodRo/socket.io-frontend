import React from 'react'
import PropTypes from 'prop-types'

import Job from './Job'

function List(props) {
    const { jobs = [] } = props
    const jobList = jobs.map(({ description, title }, idx) => 
        <Job
            key={idx}
            description={description}
            title={title}
        />
    )

    return (
        <>
            {jobList}
        </>
    )
}

List.propTypes = {
    jobs: PropTypes.array.isRequired,
}

export default List
