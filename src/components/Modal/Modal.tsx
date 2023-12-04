import { createPortal } from "react-dom";
import { useEffect } from "react";
import { ModalBackdrop, ModalContent } from "./Modal.styled";
import Icon from "../Icon/Icon";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    onClose();
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <div onClick={handleCloseClick}>
          <Icon name="icon-x" className="x" />
        </div>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    document.querySelector("#modal-root")!
  );
};
