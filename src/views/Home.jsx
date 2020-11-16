import React from 'react'

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

function Home() {
    return (
        <JobList
            jobs={jobs}
        />        
    )
}


export default Home
