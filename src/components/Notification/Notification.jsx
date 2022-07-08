import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Message = styled.p`
    text-align: center;
`
const Notification = ({message}) => {
    return <Message>{message}</Message>             
}

export default Notification;

Notification.propTypes = {
    message: PropTypes.string,
}