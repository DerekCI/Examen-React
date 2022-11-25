import React from "react";
import styles from "./Modal.module.css";
const ModalView = ({ setIsOpen}) => {
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
                <p>Nombre:  </p>
                <p>Correo:  </p>
                <p>Telefono: </p>
      
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