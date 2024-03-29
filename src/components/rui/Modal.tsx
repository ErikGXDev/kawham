import { cn } from "@utils/cn";
import Text from "./Text";
import { InputHTMLAttributes, forwardRef } from "react";

export interface ModalProps extends InputHTMLAttributes<HTMLDivElement> {
  showModal: boolean;
  setShowModal: Function;
  children: React.ReactNode;
  title: string;
}

const Modal = forwardRef(({ ...props }: ModalProps, ref) => (
  <div className={cn(props.showModal ? "block" : "hidden")} ref={ref as any}>
    <div
      {...props}
      className="bg-background-default border-4 border-background-highest fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-xl min-w-[400px]"
    >
      <div className="border-b-4 rounded-t-lg border-b-background-highest bg-background-higher flex justify-between py-2 px-4">
        <Text variant="text">{props.title}</Text>
      </div>
      <div className="h-full p-4 flex flex-col">{props.children}</div>
    </div>
    <div
      className="bg-black/25 w-screen h-screen fixed left-0 top-0"
      onClick={() => {
        props.setShowModal(false);
      }}
    ></div>
  </div>
));

export default Modal;
