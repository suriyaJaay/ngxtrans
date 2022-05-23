export interface IModalDialog {
  cancelButtonLabel?: string;
  confirmButtonLabel?: string;
  dialogHeader?: string;
  dialogContent?: string;
  callbackMethod: () => void;
}
