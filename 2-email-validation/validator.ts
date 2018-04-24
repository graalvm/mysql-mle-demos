import * as validator from "validator";

function isEmail(input: string): boolean {
    return validator.isEmail(input);
}

export = {
    isEmail: isEmail
};
