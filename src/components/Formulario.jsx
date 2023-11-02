import React, { useState } from 'react'

const Formulario = () => {

    const [genero, setGenero] = useState("")
    const [artista, setArtista] = useState("")
    const [cancion, setCancion] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        
        if(genero.length > 3 && genero.trim()){
            alert ("Por favor chequea que la información sea correcta")
        }else if(artista.length < 6){
            alert("Por favor chequea que la información sea correcta.")
        }else{
            alert("Los datos son correctos")
        }

    }


  return (
    <>
        <h2 className='diligencia'>Diligencia la información correspondiente</h2>
        <h3 className='diligencia'>Elige tu canción favorita</h3>

        <form
            className='formulario'
            onSubmit={handleSubmit}
        >
            <div>
                <label htmlFor="genero">Género: </label>
                <input 
                    type="text" 
                    placeholder='ingresar género musical'
                    id='genero'
                    value={genero}
                    onChange={e => setGenero(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="artista">Artista: </label>
                <input 
                    type="text" 
                    placeholder='ingresar artista'
                    id='artista'
                    value={artista}
                    onChange={e => setArtista(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="cancion">Nombre canción: </label>
                <input 
                    type="text" 
                    placeholder='ingresar canción'
                    id='cancion'
                    value={cancion}
                    onChange={e => setCancion(e.target.value)}
                />
            </div>

            <input 
                type="submit"
                value={"Enviar Datos"}
            />
        </form>
    </>
  )
}

export default Formulario