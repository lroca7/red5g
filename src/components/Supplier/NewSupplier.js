/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Supplier.scss";
import Button from "@mui/material/Button";
import { Grid, Input, MenuItem, Modal, Select, TextField } from "@mui/material";

const NewSupplier = () => {
    const [open, setOpen] = useState(false);

    const initialValues = {
        nameSupplier: "",
        lastNameSupplier: "",
        nitSupplier: "",
    };

    const [supplierValues, setSupplierValues] = useState(initialValues);

    const initialErrorState = {
        nameSupplier: false,
        lastNameSupplier: false,
        nitSupplier: false,
    };
    const [errorState, setErrorState] = useState(initialErrorState);

    const checkValidation = () => {
        const errorValidate = JSON.parse(JSON.stringify(errorState));
        Object.entries(supplierValues).forEach(([key, value]) => {
            if (value === "") {
                errorValidate[key] = true;
            } else {
                errorValidate[key] = false;
            }
        });
        setErrorState(errorValidate);
    };
    const nextStep = () => {
        checkValidation();

        let errors = 0;
        Object.entries(errorState).forEach(([key, value]) => {
            if (value === true) {
                errors = errors + 1;
            }
        });
        if (errors === 0) {
            setOpen(true);
        }
    };

    const handleChange = (element) => {
        const value = element.target.value;

        setSupplierValues({
            ...supplierValues,
            nameSupplier: value,
        });
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

            <form className="form-supplier">
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
                                error={errorState.nameSupplier}
                                value={supplierValues.nameSupplier}
                                onChange={handleChange}
                            ></TextField>
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Apellidos"
                                error={errorState.lastNameSupplier}
                                value={supplierValues.lastNameSupplier}
                                onChange={handleChange}
                            ></TextField>
                        </Grid>
                        <Grid className="colm-9 grid-section">
                            <TextField
                                className="field"
                                variant="outlined"
                                label="NIT/Cédula"
                                error={errorState.nitSupplier}
                                value={supplierValues.nitSupplier}
                                onChange={handleChange}
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
            </form>

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
