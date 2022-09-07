class customizedServerError {
    constructor(status, errorMsg) {
        this.status = status;
        this.errorMsg = errorMsg;
    }
}

module.exports = customizedServerError;
