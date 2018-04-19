import * as validator from "validator";

function isEmail(input: string): boolean {
    return validator.isEmail(input);
}

function isFQDN(input: string): boolean {
    return validator.isFQDN(input);
}

function trimS(input: string): string {
   return validator.trim(input);
}

export = {
    // validators
    jsContains: validator.contains,
    isEmail: isEmail,
    isFQDN: isFQDN,
    isMobilePhone: validator.isMobilePhone,
    // sanitizers
    blacklist: validator.blacklist,
    jsLtrim: validator.ltrim,
    jsRtrim: validator.rtrim,
    jsTrim: validator.trim,
    trimS: trimS,
    whitelist: validator.whitelist,
};
