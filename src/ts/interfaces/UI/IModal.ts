export interface IModal {
  isOpen: boolean;
  children: JSX.Element;
  onHandleClickCloseButton: () => void;
}