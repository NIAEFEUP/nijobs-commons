const SECOND_IN_MS = 1000;
const MINUTE_IN_MS = 60 * SECOND_IN_MS;
const HOUR_IN_MS = 60 * MINUTE_IN_MS;
const DAY_IN_MS = 24 * HOUR_IN_MS;
const MONTH_IN_MS = 30.42 * DAY_IN_MS;
const OFFER_MAX_LIFETIME_MONTHS = 6;

const TimeConstants = Object.freeze({
    SECOND_IN_MS,
    MINUTE_IN_MS,
    HOUR_IN_MS,
    DAY_IN_MS,
    MONTH_IN_MS,
    OFFER_MAX_LIFETIME_MONTHS
});

export default TimeConstants;
