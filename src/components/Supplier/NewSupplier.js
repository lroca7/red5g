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
        addressSupplier: "",
        phoneSupplier: "",
        emailSupplier: "",
        descriptionSupplier: "",
        nameContact: "",
        lastNameContact: "",
        positionContact: "",
        emailContact: "",
        phoneContact: "",
    };

    const [supplierValues, setSupplierValues] = useState(initialValues);

    const initialErrorState = {
        nameSupplier: false,
        lastNameSupplier: false,
        nitSupplier: false,
        addressSupplier: false,
        phoneSupplier: false,
        emailSupplier: false,
        descriptionSupplier: false,
        nameContact: false,
        lastNameContact: false,
        positionContact: false,
        emailContact: false,
        phoneContact: false,
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
        return errorValidate;
    };
    const nextStep = () => {
        const errorValidate = checkValidation();

        let errors = 0;
        Object.entries(errorValidate).forEach(([key, value]) => {
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
        const key = element.target.id;

        setSupplierValues({
            ...supplierValues,
            [key]: value,
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
                                id="nameSupplier"
                                onChange={handleChange}
                            ></TextField>
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Apellidos"
                                error={errorState.lastNameSupplier}
                                value={supplierValues.lastNameSupplier}
                                id="lastNameSupplier"
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
                                id="nitSupplier"
                            ></TextField>
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Dirección"
                                error={errorState.addressSupplier}
                                value={supplierValues.addressSupplier}
                                onChange={handleChange}
                                id="addressSupplier"
                            ></TextField>
                            <Select
                                className="field field-select"
                                variant="outlined"
                                label="Ciudad"
                                id="city"
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
                                error={errorState.phoneSupplier}
                                value={supplierValues.phoneSupplier}
                                onChange={handleChange}
                                id="phoneSupplier"
                            ></TextField>
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Correo electronico"
                                error={errorState.emailSupplier}
                                value={supplierValues.emailSupplier}
                                onChange={handleChange}
                                id="emailSupplier"
                            ></TextField>
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Describa producto o servicio"
                                error={errorState.descriptionSupplier}
                                value={supplierValues.descriptionSupplier}
                                onChange={handleChange}
                                id="descriptionSupplier"
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
                                error={errorState.nameContact}
                                value={supplierValues.nameContact}
                                onChange={handleChange}
                                id="nameContact"
                            ></TextField>
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Apellidos"
                                xs={4}
                                error={errorState.lastNameContact}
                                value={supplierValues.lastNameContact}
                                onChange={handleChange}
                                id="lastNameContact"
                            ></TextField>
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Cargo"
                                xs={4}
                                error={errorState.positionContact}
                                value={supplierValues.positionContact}
                                onChange={handleChange}
                                id="positionContact"
                            ></TextField>
                        </Grid>
                        <Grid className="colm-12 grid-section">
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Teléfono"
                                xs={6}
                                error={errorState.phoneContact}
                                value={supplierValues.phoneContact}
                                onChange={handleChange}
                                id="phoneContact"
                            ></TextField>
                            <TextField
                                className="field"
                                variant="outlined"
                                label="Correo electronico"
                                xs={6}
                                error={errorState.emailContact}
                                value={supplierValues.emailContact}
                                onChange={handleChange}
                                id="emailContact"
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
