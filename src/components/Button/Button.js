import React, { useState } from 'react'
import styles from'./styles.module.css'

const Button = ({newClassName}) => {
    
    const [ name, setName ] = useState('')
    const changeClassName = () => setName(newClassName)

  return (
    <button onClick={changeClassName} className={`${styles.button} ${styles[name]}`}>Button</button>
  )
}

export default Button