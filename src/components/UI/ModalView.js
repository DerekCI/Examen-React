import React from "react";
import styles from "./Modal.module.css";
const ModalView = ({ setIsOpen, ...props}) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>View House</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            X
          </button>
          <div className={styles.modalContent}>
            <div>
                <p>Nombre: {props.users.name} </p>
                <p>Correo: {props.users.email} </p>
                <p>Telefono: {props.users.phone} </p>
      
            </div>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className="btn btn-danger"
                onClick={() => setIsOpen(false)}
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalView;