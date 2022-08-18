import React from 'react'

const SkillItems = ({icon, iconAlt, skillTitle, skillBar}) => {
  return (
    <div className = 'skill-item'>
        <img src={icon} alt = {iconAlt} />
        <div>
            <h5>{skillTitle}</h5>
            <i>{skillBar}</i>
        </div>
    </div>
  )
}

export default SkillItems