"use strict";

const Monthlii = require("../lib");

const monthlii = new Monthlii({
    api_key: "your-api-key",
    partner_id: "your-partner-id"
});

monthlii.calculateQuote({
    financeBalance: 3000,
    rentalTerm: 12,
}).then(({ data }) => {
    console.log(data);
}).catch(error => {
    console.error(error);
});