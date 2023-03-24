export interface YupValidateError {
  inner: {
    message: string;
    path: string;
  }[]
}
