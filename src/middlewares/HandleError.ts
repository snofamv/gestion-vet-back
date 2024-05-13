export class ErrorHandler extends Error {
  status: number = -1;
  details: string = '';
  internalMessage: string = '';
  setStatus(status: number) {
    this.status = status;
  }

  setDetailsError(message: string) {
    this.details = message;
  }

  setInternalMessage(message: string) {
    this.internalMessage = message;
  }
}
