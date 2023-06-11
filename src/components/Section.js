import React from "react"

const Section = ({
  title = `No title!!`,
  classSection,
  idSection,
  children,
}) => {

  return (
    <section
      className={classSection ?? `def_class` }
      id={idSection}
    >
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default Section