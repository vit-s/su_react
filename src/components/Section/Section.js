import React from "react"

const Section = ({
  title = `Default title!!`,
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
      {title && <h2>{title}</h2>}
      {children}
    </section>
  )
}

export default Section