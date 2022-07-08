import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'

const ButtonList = styled.ul`
  display: flex;
 justify-content: space-around;
 `
const FededbackButton = styled.button`
  cursor: pointer;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;  
`

const FeedbackOptions  = ({onGoodCounter, onNeutralCounter, onBadCounter}) => {
  return <ButtonList>
      <li>
        <FededbackButton onClick={onGoodCounter}>Good</FededbackButton>
      </li>
      <li>
        <FededbackButton onClick={onNeutralCounter}>Neutral</FededbackButton>
      </li>
      <li>
        <FededbackButton onClick={onBadCounter}>Bad</FededbackButton>
      </li>
    </ButtonList>
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onGoodCounter: PropTypes.func, 
  onNeutralCounter:  PropTypes.func, 
  onBadCounter:  PropTypes.func,
}