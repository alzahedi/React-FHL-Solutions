import React from 'react'
import Alert from './Alert'
import Button from './Button'

const Demo = () => {
 const [alertVisibility , setAlertVisibility] = React.useState(false) 

  return (
    <>
    {alertVisibility && <Alert onClose={() => setAlertVisibility(false)}>This is an alert!</Alert> }
    <Button onClick={() => setAlertVisibility(true)}>Show Alert</Button>
    </>
  )
}

export default Demo