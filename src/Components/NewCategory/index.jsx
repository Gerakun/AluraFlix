import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button,Switch, FormControlLabel } from "@mui/material/";
import { Div2 } from '../../UI';
import Swal from 'sweetalert2';
import { useAPI } from '../../Context/api';
import { SectionStyled } from '../../UI/variables';
import DataTable from '../DataTable';


function NuevaCategoria (){

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [color, setColor] = useState("");
    const [codigo, setCodigo] = useState("");
    const [codigoValido, setCodigoValido] = useState(false);
 
    const {crearCategoria, categorias, mostrarDataTable, cambiarMostrar } = useAPI();

    function validarCodigo(value) {
        if (value === "010203") {
          setCodigoValido(true);
        } else {
          setCodigoValido(false);
        }
      }

    const editeCategoria = (props) => {
        setTitulo(props.titulo)
        setDescripcion(props.descripcion)
        setColor(props.colorPrimario)
        setCodigo(props.codigo)
        
    }


    function limpiarInputs() {
        setTitulo("");
        setDescripcion("");
        setColor("");
        setCodigo("");

    }

    const [agregado, setAgregado] = useState(false);

    useEffect(() => {
        if (agregado) {
          
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Nueva categoría creada con exito',
            showConfirmButton: true,
            timer: 1700
          })

        }
      }, [agregado]);

      let crearNuevaCategoria = {
        titulo,colorPrimario: color,descripcion}

    return <>
        <form onSubmit={(e,values) => {
            e.preventDefault();
                crearCategoria(crearNuevaCategoria);
                setAgregado(true)
                setCodigo("")

        }}>
            <Typography variant="h3" align="center">Nueva categoría</Typography>
            <TextField 
            id="titulo" 
            label="Titulo" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            onChange={(e) => 
                setTitulo(e.target.value)} 
            value={titulo}
            required
            />
            <TextField 
            id="descripcion" 
            label="Descripción de la categoría" 
            variant="outlined" 
            fullWidth margin="normal"  
            multiline rows={2}
            onChange={(e) => 
                setDescripcion(e.target.value)} 
            value={descripcion}
            required
            />
            <TextField
            type="color" 
            id="color" 
            label="Color" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            onChange={(e) => 
                setColor(e.target.value)} 
            value={color}
            />
            <TextField 
            id="codeSecurity" 
            label="Ingresa el código de seguridad para poder guardar la categoría" 
            variant="outlined" 
            fullWidth 
            margin="normal"
            onChange={(e) =>{
                setCodigo(e.target.value);
                validarCodigo(e.target.value);}} 
            value={codigo}
            required
            />
             <Div2>
                <Button variant="contained" type="submit" disabled={!codigoValido}>Guardar</Button>
                <Button variant="contained" color="inherit" onClick={limpiarInputs} >Limpiar</Button>
            </Div2>
        </form>
        <FormControlLabel control={<Switch onClick={cambiarMostrar} />} label="Tabla de contenido" />
            {mostrarDataTable && <SectionStyled><DataTable categorias={categorias} editar={editeCategoria} /></SectionStyled>}
    </>
};

export default NuevaCategoria;