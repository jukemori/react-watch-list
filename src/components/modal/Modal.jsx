import PropTypes from "prop-types";

import "./modal.scss";
import { useEffect } from "react";

const Modal = (props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={`modal ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
};

export const ModalContent = (props) => {
  const contentRef = useRef(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (props.onClose) props.onClose();
  };

  return (
    <div ref={contenRef} className="modal__content">
      {propslchildren}
      <div className="modal__content__close" onClick={closeModal}></div>
    </div>
  );
};

ModalContent.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
