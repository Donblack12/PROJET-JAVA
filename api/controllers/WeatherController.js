module.exports = {
  // Ajout d'une ville à la base de données
  addCity: async function(req, res) {
    try {
      const { name, lat, lon } = req.body;
      const newCity = await City.create({ name, lat, lon }).fetch();
      return res.status(201).json(newCity);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  // Génération et sauvegarde des données météorologiques pour une ville
  createWeatherRecord: async function(req, res) {
    const cityName = req.body.city;
    try {
      const city = await City.findOne({ name: cityName });
      if (!city) {
        return res.status(404).send('City not found');
      }

      const forecasts = [];
      for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);

        const tempMax = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
        const tempMin = Math.floor(Math.random() * (tempMax - 5 + 1)) + 5;
        const descriptions = ["Sunny", "Partly Cloudy", "Cloudy", "Rainy", "Thunderstorm"];
        const description = descriptions[Math.floor(Math.random() * descriptions.length)];

        forecasts.push({
          date,
          tempMax,
          tempMin,
          description
        });
      }

      const weatherData = {
        city: cityName,
        forecasts,
        requestDate: new Date()
      };

      const weatherRecord = await Weather.create(weatherData).fetch();
      return res.status(201).json(weatherRecord);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },

  // Récupération des données météorologiques enregistrées
  getWeatherData: async function(req, res) {
    try {
      const { city } = req.query;
      const criteria = city ? { city } : {};
      const weatherData = await Weather.find(criteria);
      return res.json(weatherData);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  },
};
