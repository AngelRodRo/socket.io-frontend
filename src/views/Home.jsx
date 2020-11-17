
import React from 'react'
import Styled from 'styled-components'
import { useSelector } from 'react-redux'

import JobList from '../components/JobList'

const StyledList = Styled.div`
    padding: 20px;
`

function Home() {

    const jobs = useSelector(state => state.jobs.jobs)

    return (
        <StyledList>
            <JobList
                jobs={jobs}
            />   
        </StyledList>
    )
}


export default Home
