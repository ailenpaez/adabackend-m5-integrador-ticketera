function customError(data: { message: string; status: number }) {
  const error = new Error();
  error.message = data.message;
  error["status"] = data.status;

  throw error;
}

export default customError;
