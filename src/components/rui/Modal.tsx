import { cn } from "@utils/cn";
import Text from "./Text";
import { InputHTMLAttributes, forwardRef } from "react";

export interface ModalProps extends InputHTMLAttributes<HTMLDivElement> {
  showModal: boolean;
  setShowModel: Function;
  children: React.ReactNode;
  title: string;
}

const Modal = forwardRef(({ ...props }: ModalProps, ref) => (
  <div className={cn(props.showModal ? "block" : "hidden")}>
    <div
      {...props}
      ref={ref as any}
      className="bg-background-higher border-4 border-background-highest absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-xl min-w-[400px] min-h-[500px]"
    >
      <div className="border-b-4 border-b-background-highest flex justify-between py-2 px-4">
        <Text variant="text">{props.title}</Text>
      </div>
      <div className="h-full p-4">{props.children}</div>
    </div>
    <div
      className="bg-black/10 w-screen h-screen absolute left-0 top-0"
      onClick={() => {
        props.setShowModel(false);
      }}
    ></div>
  </div>
));

export default Modal;
