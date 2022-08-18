import React from 'react'

const SkillItems = ({icon, iconAlt, skillTitle, skillBar}) => {
  return (
    <>
        <img src={icon} alt = {iconAlt} />
        <div>
            <h5>{skillTitle}</h5>
            <i>{skillBar}</i>
        </div>
    </>
  )
}

export default SkillItems