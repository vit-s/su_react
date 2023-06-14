import React from "react"

console.log(`Section =>> OK`)
const Section = ({
  title = `Welcome title!`,
  classSection = `def_class`,
  classSectionTwo = 'def_class_two',
  idSection,
  children,
}) => {

  return (
    <section
      className={`${classSection} ${classSectionTwo}`}
      id={idSection}
    >
      <h1>Section name</h1>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  )
}

export default Section