import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledCard = Styled.div`
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.4);
    transition: 0.3s;
    margin: 10px auto;
    color: var(--textNormal);
    width: 600px;
    padding-bottom: 10px;
    @media (max-width: 500px) {
        width: 100%;
    }
    :hover {
        box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.2);
    }
`

const Card = ({ children, ...props }) => {
    return (
        <StyledCard
            {
                ...props
            }
        >
            {children}
        </StyledCard>
    )
}

Card.propTypes = {
    children: PropTypes.any
}

export default Card;