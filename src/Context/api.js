import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import {v4 as uuid} from "uuid"; 
import axios from "axios";

const ApiContext = createContext()

export const ApiProvider = ({ children }) => {
 
    //Lista de videos 
    const [videos, setVideos] = useState([]);

    useEffect(() => {
    const obtenerVideos = async () =>{

        const url = "https://my-json-server.typicode.com/Gerakun/AluraFlix/videos"
        const result = await axios.get(url);

        setVideos(result.data)
    }
    obtenerVideos()
    },[]);

    //Lista de Categorias
    const [categorias, setCategorias] = useState([])
 
    useEffect(() => {
    const obtenerCategorias = async () =>{

     const url = "https://my-json-server.typicode.com/Gerakun/AluraFlix/categorias"
     const result = await axios.get(url);

        setCategorias(result.data)
    }
        obtenerCategorias()
    },[]);
    


    //registrar videos
    const registrarVideo = (video) => {
    console.log("Nuevo video", video) 
    setVideos([...videos, video])
    }

    //Crear categoria
    const crearCategoria = (nuevaCategoria) => {
    console.log(nuevaCategoria)
    setCategorias([...categorias, {...nuevaCategoria, id: uuid() }])
    }

    //DataTable
    const [mostrarDataTable, setMostrarDataTable] = useState(false)

    const cambiarMostrar = () => {
        setMostrarDataTable(!mostrarDataTable)
    }

    //Eliminar categoria
    const removerCategoria = async (id) => {
        return fetch(`https://my-json-server.typicode.com/Gerakun/AluraFlix/categorias/${id}`, {
          method: 'DELETE'
        }).then(respusta => {
            if(!respusta.ok) {
              throw new Error ('No fue posible remover la categoria');
            }
          })
        }

    const eliminaCategoria = (id) => {
        removerCategoria(id)
        setCategorias(categorias.filter(categorias => categorias.id !== id));
    }


    return (
        <ApiContext.Provider value={{
            videos,
            categorias,
            registrarVideo,
            crearCategoria,
            mostrarDataTable,
            cambiarMostrar,
            eliminaCategoria, 
            
        }}>
            {children}
        </ApiContext.Provider>
    )
}  

export function useAPI() {
    const context = useContext(ApiContext);
    if (context === undefined) {
      throw new Error("Context debe usarse dentro de un Provider");
    }
    return context;
  }