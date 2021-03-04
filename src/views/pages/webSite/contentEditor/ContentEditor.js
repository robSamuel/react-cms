import React from 'react';
import { CButton } from '@coreui/react';

const ContentEditor = () => {
    const onEditClick = () => {
        console.log("Edit Clicked");
    }

    return (
        <div className="ContentEditor">
            <div className="ContentEditor-header">
                <label>Editor de Contenido</label>
            </div>
            <div className="ContentEditor-body">
                <CButton
                    className="ContentEditor-edit-btn"
                    block color="primary"
                    onClick={onEditClick}
                >
                    Editar web en vivo
                </CButton>
                <i>* La versión live puede presentar leves diferencias respecto a la real.</i>
                <br />
                <i>* Se recomienda utilizar un ordenador de sobremesa o portátil para la edición de los contenidos.</i>
            </div>
        </div>
    );
};

export default ContentEditor;