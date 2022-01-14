/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Supplier.scss";
import Button from "@mui/material/Button";
import { Grid, Input, MenuItem, Modal, Select, TextField } from "@mui/material";

const NewSupplier = () => {
    const [open, setOpen] = useState(false);

    const nextStep = () => {
        setOpen(true);
    };
    return (
        <div className="new-supplier supplier">
            <h1 className="title">Formulario de inscripción de proveedores</h1>
            <p className="description">
                Podrán inscribirse todas las personas interesadas en ser
                proveedores de bienes y servicios. Cualquier persona natural o
                jurídica podrá registrarse, cumpliendo con los requisitos
                exigidos y el procedimiento que la Empresa define para tal
                efecto. Teniendo en cuenta la estrategia de aprovisionamiento,
                la Empresa establece criterios de capacidad jurídica,
                financiera, técnica, administrativa, operativa y demás que se
                consideran pertinentes, con el fin de que los proveedores
                registrados puedan ser precalificados para las diferentes
                categorías de bienes y servicios, lo cual servirá de fuente de
                información para realizar solicitudes de ofertas, según los
                procedimientos establecidos en el Reglamento de Contratación.
                Para poder participar en los procesos de contratación de
                FINSOCIAL, es requisito para el proveedor, estar registrado en
                el sistema{" "}
                <b>diligenciando todos los datos solicitados a continuación.</b>
            </p>

            <div className="form-supplier">
                <div className="form-supplier-section">
                    <h2 className="section-title">
                        1.1. Identificación del proveedor
                    </h2>
                    <div className="section-fields">
                        <Grid className="colm-12 grid-section">
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Nombres"
                            ></TextField>
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Apellidos"
                            ></TextField>
                        </Grid>
                        <Grid className="colm-9 grid-section">
                            <TextField
                                className="field"
                                variant="outlined"
                                label="NIT/Cédula"
                            ></TextField>
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Dirección"
                            ></TextField>
                            <Select
                                className="field field-select"
                                variant="outlined"
                                label="Ciudad"
                            >
                                <MenuItem>Barranquilla</MenuItem>
                                <MenuItem>Bogota</MenuItem>
                                <MenuItem>Cartagena</MenuItem>
                                <MenuItem>Medellin</MenuItem>
                                <MenuItem>Cali</MenuItem>
                            </Select>
                        </Grid>
                        <Grid className="colm-9 grid-section">
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Teléfono"
                            ></TextField>
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Correo electronico"
                            ></TextField>
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Describa producto o servicio"
                            ></TextField>
                        </Grid>
                    </div>
                </div>
                <div className="form-supplier-section">
                    <h2 className="section-title">
                        1.2. Identificación de contacto
                    </h2>
                    <div className="section-fields">
                        <Grid className="colm-9 grid-section">
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Nombres"
                                xs={4}
                            ></TextField>
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Apellidos"
                                xs={4}
                            ></TextField>
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Cargo"
                                xs={4}
                            ></TextField>
                        </Grid>
                        <Grid className="colm-12 grid-section">
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Teléfono"
                                xs={6}
                            ></TextField>
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Correo electronico"
                                xs={6}
                            ></TextField>
                        </Grid>
                    </div>
                </div>
                <div className="form-actions">
                    <Button
                        variant="contained"
                        className="third-button"
                        onClick={() => {
                            nextStep();
                        }}
                    >
                        SIGUIENTE
                    </Button>
                </div>
            </div>

            <Modal open={open}>
                <div className="modal-authorization">
                    <p className="text-modal">
                        Su solicitud de registro como proveedor de servicios
                        para FINSOCIAL se ha generado con éxito, próximamente
                        enviaremos un correo electrónico con la decisión de esta
                        solicitud.
                    </p>
                    <Button
                        className="default-button"
                        variant="outlined"
                        onClick={() => setOpen(false)}
                    >
                        FINALIZAR
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default NewSupplier;
