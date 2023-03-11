import React from 'react'

export default function AlertMessage(props) {

  // const capitalize = (word) => {
  //   let letter = word.charAt(0);
  //   letter = letter.toUpperCase() + word.slice(1);
  //   return letter
  //   // const lower = word.toLowerCase();
  //   // return lower.charAt(0).toUpperCase() + lower.slive(1);
  // }

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show container my-3`} role="alert">
      <strong>{props.alert.message}</strong>: 
      {/* <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button> */}
    </div>
  )
}
