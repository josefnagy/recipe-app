import React, { ReactPortal } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  onDismiss: () => void;
  title: string;
  content: JSX.Element;
  actions: JSX.Element;
}

export const Modal = (props: ModalProps): ReactPortal => {
  return ReactDOM.createPortal(
    <div
      onClick={props.onDismiss}
      className="absolute top-1/3 left-1/2 border border-primary rounded-md "
    >
      <div onClick={(e) => e.stopPropagation()} className="">
        <div className="px-5 py-1 text-lg border-b border-primary bg-primary">
          {props.title}
        </div>
        <div className="px-5 py-2 font-light">{props.content}</div>
        <div className="font-light flex justify-around">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal') as HTMLElement,
  );
};
