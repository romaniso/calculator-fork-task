class DivideByZeroError extends Error {
    
    constructor(message) {
        super(message);
        this.name = "DivideByZeroError";
    }
}

module.exports = {
    DivideByZeroError,
}
