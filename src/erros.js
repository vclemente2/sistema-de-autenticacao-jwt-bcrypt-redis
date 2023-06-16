class InvalidArgumentError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "InvalidArgumentError";
  }
}

class InternalServerError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "InternalServerError";
  }
}

class NotFoundError extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "NotFoundError";
  }
}

module.exports = {
  InvalidArgumentError: InvalidArgumentError,
  InternalServerError: InternalServerError,
  NotFoundError: NotFoundError
};
