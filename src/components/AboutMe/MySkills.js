import React from 'react'
import PhpIcon from '../assets/SkillSvgs/phpicon.svg'
import JavaScript from '../assets/SkillSvgs/jsicon.svg'
import SkillItems from './SkillItems.js'
// import HtmlIcon from '../assets/SkillSvgs/htmlicon.svg'

const MySkills = () => {
    const SkillDetails = {
        skillOne: {
            skillImgAlt: 'Php Icon',
            skillIcon: PhpIcon,
            skillTitle: 'PHP',
            skillBar: '-----------------------------------'
        },
        skillTwo: {
            skillImgAlt: 'Javascript Icon',
            skillIcon: JavaScript,
            skillTitle: 'JAVASCRIPT',
            skillBar: '-----------------------------------'
        }
    }
    return (
        <div className='container skill-item-container'>
            <h2>My Skills</h2>
            <p>Here are a few skills I possess</p>
            <div className = 'skill-item-item-container'>
                <SkillItems icon = {SkillDetails.skillOne.skillIcon} iconAlt = {SkillDetails.skillOne.skillImgAlt} skillTitle = {SkillDetails.skillOne.skillTitle} skillBar = {SkillDetails.skillOne.skillBar}  />
                <SkillItems icon = {SkillDetails.skillTwo.skillIcon} iconAlt = {SkillDetails.skillTwo.skillImgAlt} skillTitle = {SkillDetails.skillTwo.skillTitle} skillBar = {SkillDetails.skillOne.skillBar}  />
                <SkillItems icon = {SkillDetails.skillTwo.skillIcon} iconAlt = {SkillDetails.skillTwo.skillImgAlt} skillTitle = {SkillDetails.skillTwo.skillTitle} skillBar = {SkillDetails.skillOne.skillBar}  />
                <SkillItems icon = {SkillDetails.skillTwo.skillIcon} iconAlt = {SkillDetails.skillTwo.skillImgAlt} skillTitle = {SkillDetails.skillTwo.skillTitle} skillBar = {SkillDetails.skillOne.skillBar}  />
                <SkillItems icon = {SkillDetails.skillTwo.skillIcon} iconAlt = {SkillDetails.skillTwo.skillImgAlt} skillTitle = {SkillDetails.skillTwo.skillTitle} skillBar = {SkillDetails.skillOne.skillBar}  />
                <SkillItems icon = {SkillDetails.skillTwo.skillIcon} iconAlt = {SkillDetails.skillTwo.skillImgAlt} skillTitle = {SkillDetails.skillTwo.skillTitle} skillBar = {SkillDetails.skillOne.skillBar}  />
            </div>
        </div>
    )
}

export default MySkills