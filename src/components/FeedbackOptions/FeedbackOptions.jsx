import React from "react"
const FeedbackOptions  = ({onGoodCounter, onNeutralCounter, onBadCounter}) => {
  return <ul>
      <li>
        <button onClick={onGoodCounter}>Good</button>
      </li>
      <li>
        <button onClick={onNeutralCounter}>Neutral</button>
      </li>
      <li>
        <button onClick={onBadCounter}>Bad</button>
      </li>
    </ul>
}

export default FeedbackOptions;