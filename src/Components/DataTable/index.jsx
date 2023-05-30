import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from '@mui/material/';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useAPI } from '../../Context/api';
import Swal from 'sweetalert2';


const DataTable = ({editar}) => {

    const {categorias, eliminaCategoria} = useAPI();
    
    const handleClick = async () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Ya puedes editar en la sección de arriba &#11014; &#11014; &#11014;',
            showConfirmButton: false,
            timer: 1700
          });
      };  
      
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell >Nombre</TableCell>
                        <TableCell align="center">Descripción</TableCell>
                        <TableCell align="right">Editar</TableCell>
                        <TableCell align="right">Eliminar</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {categorias.map(celda=>(
                        <TableRow key={celda.titulo} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" >{celda.titulo}</TableCell>
                            <TableCell align="right">{celda.descripcion}</TableCell>
                            <TableCell align="right"><Button value="Editar" onClick={async () => await editar(celda)}><AppRegistrationIcon onClick={() => handleClick()}/></Button></TableCell>
                            <TableCell align="right"><Button onClick={() => {
                  Swal.fire({
                    title: "¿seguro que desea eliminar esta categoria?",
                    text: "¡El elemento sera borrado definitivamente!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    cancelButtonText: 'Cancelar',
                    confirmButtonText: 'Si, eliminar!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      eliminaCategoria(celda.id)
                      Swal.fire(
                        'Eliminado!',
                        'La categoria se ha eliminado correctamente',
                        'success'
                      )
                    }
                  })
                }}><DeleteForeverIcon /></Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default DataTable;