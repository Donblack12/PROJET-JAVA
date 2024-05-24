module.exports = {
  attributes: {
    city: { type: 'string', required: true },
    forecasts: {
      type: 'json',
      columnType: 'array',
      required: true,
    },
    requestDate: { type: 'ref', columnType: 'datetime', autoCreatedAt: true },
  },
};
