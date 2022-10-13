export default Object.freeze({
    title: {
        max_length: 90,
    },
    description: {
        max_length: 1500,
    },
    HiddenOfferReasons: {
        ADMIN_BLOCK: "ADMIN_REQUEST",
        COMPANY_REQUEST: "COMPANY_REQUEST",
        COMPANY_BLOCKED: "COMPANY_BLOCKED",
        COMPANY_DISABLED: "COMPANY_DISABLED",
    },
});

export const validApplyURL = (val) => {
    const httpRegex = /^https?:\/\/\S+\.\S+$/;
    const emailRegex = /^mailto:(\S+@\S+)$/;

    return httpRegex.test(val) || emailRegex.test(val);
};
