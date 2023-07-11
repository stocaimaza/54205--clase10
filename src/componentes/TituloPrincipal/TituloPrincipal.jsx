import React from 'react'

const TituloPrincipal = ({saludo,titulo}) => {
  return (
    <>
      <h1>  {titulo}  </h1>
      <h2> {saludo} </h2>
    </>
  )
}

export default TituloPrincipal