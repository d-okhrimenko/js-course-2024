export class Forecast {
  constructor() {
    this.key = 'f16be315d364d1bbcd2508d8178f5559';
    this.weatherURI = 'https://api.openweathermap.org/data/2.5/weather';
  }

  async getWeather(city) {
    const query = `?q=${city}&appid=${this.key}&units=metric&lang=uk`;

    try {
      const response = await fetch(this.weatherURI + query);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }
}