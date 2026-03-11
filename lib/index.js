"use strict";

const axios = require("axios")

const Monthlii = module.exports = class Monthlii {

    /**
     * monthlii
     * Create a new Monthlii client.
     *
     * @param {Object} options Client options.
     * @param {String} options.api_key Your API key.
     * @param {String} options.partner_id Your partner ID.
     */
    constructor(options) {
        this.api_key = options.api_key;
        this.partner_id = options.partner_id;
        this.host = "https://monthlii.co.uk";
    }

    /**
     * apiSettings
     * Get API settings.
     * 
     * @return {Promise} Promise object represents the API settings response.
     */
    apiSettings() {
        return axios.get(`${this.host}/api/apisettings/${this.api_key}/${this.partner_id}`);
    }

    /**
     * addQuote
     * Add a quote method will save the clients details and loan
     * requirements/terms. The revelant parties will be sent details of the quote.
     * 
     * @param {Object} request Quote request object.
     * @return {Promise} Promise object represents the add quote response.
     */
    addQuote(request) {
        return axios.post(`${this.host}/api/addQuote`, request);
    }

    /**
     * rentalTerms
     * Get partner rental terms.
     * 
     * @return {Promise} Promise object represents the rental terms response.
     */
    rentalTerms() {
        return axios.get(`${this.host}/api/rentalTerms/${this.api_key}/${this.partner_id}`);
    }

    /**
     * calculateQuote
     * Get the calculated quote amounts.
     * 
     * @param {Object} param0 Quote calculation request object.
     * @param {Number} param0.financeBalance Finance balance amount.
     * @param {Number} param0.rentalTerm Rental term duration.
     * @return {Promise} Promise object represents the calculated quote response.
     */
    calculateQuote({ financeBalance, rentalTerm }) {
        return axios.get(`${this.host}/api/calculateQuote/${this.api_key}/${this.partner_id}/${financeBalance}/${rentalTerm}`);
    }

    /**
     * completeQuote
     * Complete a quote method will set the quote as completed. The revelant parties will be sent details of the quote.
     * 
     * @param {Object} request Quote complete request object.
     * @return {Promise} Promise object represents the complete quote response.
     */
    completeQuote(request) {
        return axios.put(`${this.host}/api/completeQuote`, request);
    }
}