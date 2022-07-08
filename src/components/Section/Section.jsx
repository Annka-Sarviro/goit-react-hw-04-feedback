import React from "react"
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.h2`
    text-align: center;
    font-size: 20px;
   margin-bottom: 20px;
`
const SectionBox = styled.section`
   :not(:last-child){ margin-bottom:20px;}
`
const Section = ({title, children}) => {
    return <SectionBox>
        <Title>{title}</Title>
        {children}
    </SectionBox>
  
}

export default Section;

Section.propTypes = {
    title: PropTypes.string
}