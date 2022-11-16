import React from "react";
import styles from "./Modal.module.css";
import AddUser from "../AddUser";

const ModalUpdate = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal2}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Update user</h5>
          </div>
          <div className={styles.modalContent}>
            <AddUser/>
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

export default ModalUpdate;
