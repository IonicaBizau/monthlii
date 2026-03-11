## Documentation

You can see below the API reference of this module.

### constructor

monthlii
Create a new Monthlii client.

#### Params

- **Object** `options`: Client options.
- **String** `options.api_key`: Your API key.
- **String** `options.partner_id`: Your partner ID.

### `apiSettings()`
Get API settings.

#### Return
- **Promise** Promise object represents the API settings response.

### `addQuote(request)`
Add a quote method will save the clients details and loan
requirements/terms. The revelant parties will be sent details of the quote.

#### Params

- **Object** `request`: Quote request object.

#### Return
- **Promise** Promise object represents the add quote response.

### `rentalTerms()`
Get partner rental terms.

#### Return
- **Promise** Promise object represents the rental terms response.

### `calculateQuote(param0, param0.financeBalance, param0.rentalTerm)`
Get the calculated quote amounts.

#### Params

- **Object** `param0`: Quote calculation request object.
- **Number** `param0.financeBalance`: Finance balance amount.
- **Number** `param0.rentalTerm`: Rental term duration.

#### Return
- **Promise** Promise object represents the calculated quote response.

### `completeQuote(request)`
Complete a quote method will set the quote as completed. The revelant parties will be sent details of the quote.

#### Params

- **Object** `request`: Quote complete request object.

#### Return
- **Promise** Promise object represents the complete quote response.

