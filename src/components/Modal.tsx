import React, { ReactPortal, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useOutsideClick } from '../hooks';

interface ModalProps {
  onDismiss: () => void;
  className: string;
  open: boolean;
  title: string;
  content: JSX.Element | boolean;
  actions: JSX.Element | boolean;
}

export const Modal = (props: ModalProps): ReactPortal => {
  const [open, setOpen] = useState(props.open);
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, () => {
    setOpen(false);
  });

  return ReactDOM.createPortal(
    open && (
      <div onClick={props.onDismiss} className={props.className} ref={modalRef}>
        <div className="">
          <div className="px-5 py-1 text-lg border-b border-primary bg-primary">
            {props.title}
          </div>
          {props.content && (
            <div className="px-5 py-2 font-light">{props.content}</div>
          )}
          {props.actions && (
            <div className="font-light flex justify-around">
              {props.actions}
            </div>
          )}
        </div>
      </div>
    ),
    document.querySelector('#modal') as HTMLElement,
  );
};
