import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ToFrom = () => {
    const {bedType} = useParams();
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's bike a {bedType} bike.</h1>
            <p>Want a <Link to="/home">another car?</Link> </p>
        </div>
    );
};

export default ToFrom;