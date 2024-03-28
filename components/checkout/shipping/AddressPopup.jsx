import styles from "./styles.module.scss";
// import react icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// import mui modal
import Modal from "@mui/material/Modal";
// import component
import AddressForm from "./AddressForm";
const AddressPopup = ({ address, handleSubmit, role, toggleAddressForm, isToggleAddressForm, usedIn }) => {
  return (
    <>
      {!usedIn ? (
        role == "edit" ? (
          <div
            className={`${styles.address__Edit} text-[#6176fe] font-bold cursor-pointer`}
            onClick={() => toggleAddressForm(true)}
          >
            Edit
          </div>
        ) : (
          <button className={styles.hide_show} onClick={() => toggleAddressForm(true)}>
            <span>
              <span>{isToggleAddressForm ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>
              Add Address
            </span>
          </button>
        )
      ) : (
        ""
      )}
      <Modal
        open={isToggleAddressForm}
        onClose={() => toggleAddressForm()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ backgroundColor: "transparent" }}
        className={`my-2 ${styles.__modal}`}
      >
        <AddressForm address={address} handleSubmit={handleSubmit} closeForm={() => toggleAddressForm()} role={role} />
      </Modal>
    </>
  );
};
export default AddressPopup;
