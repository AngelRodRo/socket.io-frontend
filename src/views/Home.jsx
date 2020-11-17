import React from 'react'

import Styled from 'styled-components'

import JobList from '../components/JobList'

const jobs = [
    {
        title: "Titulo 1",
        description: "Descripcion del trabajo 1",
    },
    {
        title: "Titulo 2",
        description: "Descripcion del trabajo 2",
    },
    {
        title: "Titulo 3",
        description: "Descripcion del trabajo 3",
    },
]

const StyledList = Styled.div`
    padding: 20px;
`

function Home() {
    return (
        <StyledList>
            <JobList
                jobs={jobs}
            />   
        </StyledList>
    )
}


export default Home
