/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logoPerson from "../../assets/images/person.png";
import logoGroup from "../../assets/images/people.png";
import "./Supplier.scss";
import Button from "@mui/material/Button";
import { Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Supplier = () => {
    const history = useNavigate();

    const [open, setOpen] = useState(false);
    const [checkAuth, setCheckAuth] = useState(false);
    const checkAuthorization = () => {
        if (!checkAuth) {
            setOpen(true);
        } else {
            history("/new/supplier");
        }
    };

    const handleChangeCheck = () => {
        setCheckAuth(!checkAuth);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="supplier">
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

            <div className="container-options-register">
                <span className="options-register-info">
                    Seleccione el tipo de persona bajo el cual desea realizar el
                    registro
                </span>
                <div className="options-register">
                    <div className="box-option option-natural-person">
                        <img src={logoPerson} alt="Persona natural" />
                        <div className="box-description">
                            Seleccione esta opción si usted es persona natural.
                        </div>
                        <Button
                            className="default-button"
                            variant="outlined"
                            onClick={() => checkAuthorization()}
                        >
                            Iniciar
                        </Button>
                    </div>
                    <div className="box-option options-legal-person">
                        <img src={logoGroup} alt="Persona juridica" />
                        <div className="box-description">
                            Seleccione esta opción si usted es persona jurídica.
                        </div>
                        <Button className="default-button" variant="outlined">
                            Iniciar
                        </Button>
                    </div>
                </div>
            </div>
            <div className="legal-check">
                <input
                    id="check-auth"
                    type="checkbox"
                    value={checkAuth}
                    onChange={() => {
                        handleChangeCheck();
                    }}
                ></input>
                Autorizo el <a href="#">tratamiento de mis datos personales</a>{" "}
                y autorizo <a href="#">términos y condiciones</a> de la página
                web.
            </div>

            <Modal open={open}>
                <div className="modal-authorization">
                    <p className="text-modal">
                        Para continuar con el proceso de inscripción es
                        necesario autorizar el tratamiento de datos y los
                        términos y condiciones del sitio.
                    </p>
                    <Button
                        className="secondary-button"
                        variant="contained"
                        onClick={() => handleClose()}
                    >
                        ACEPTAR
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default Supplier;
