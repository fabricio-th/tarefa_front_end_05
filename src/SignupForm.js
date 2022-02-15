
import React, { useState } from 'react';


const SignupForm = (props) => {

  //const [label, setLabel] = useState(props.label)

  /*const click = () => {
    setLabel(props.)    
  }*/

  
  const click = () => {
      props.mode()
  } 


  return (
    <div>
      <div>
        <h2> Sign up to my newsletter </h2>
        <input type="text" name="email" />
        <button class={ props.btnClass }>  Sign up </button>  
      </div>

      <div>
        <button 
          class={ props.btnClass }
          onClick={ click } > { props.label } </button>
      </div>
    </div>
  )

}

export default SignupForm