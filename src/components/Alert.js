import React from 'react'

const Alert = (props) => {
    return (
        <div>
          {props.alerts &&  <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{props.alerts.type}</strong> {props.alerts.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </div>
    )
}

export default Alert
