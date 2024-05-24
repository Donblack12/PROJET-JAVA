module.exports = {
  attributes: {
    name: { type: 'string', required: true, unique: true },
    lat: { type: 'number', required: true },
    lon: { type: 'number', required: true },
  },
};
