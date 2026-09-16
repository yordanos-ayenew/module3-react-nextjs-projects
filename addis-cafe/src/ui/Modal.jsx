import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, onClose }) {
  const panelRef = useRef(null);
  const previousFocus = useRef(null);
  useEffect(() => {
    previousFocus.current = document.activeElement;
    panelRef.current?.focus();
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown",handleKeyDown);
      previousFocus.current?.focus();
    };
  }, [onClose]);

  return createPortal(
    <div
      className="overlay"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        className="panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex="-1"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
export default Modal;