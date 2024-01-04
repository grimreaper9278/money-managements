class Response {
  constructor(resp) {
    const { success, data, message } = resp ?? {};
    this.success = success ?? true;
    this.data = data ?? [];
    this.message = message ?? "";
  }
}

module.exports = Response;
