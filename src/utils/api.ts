const API_KEY = import.meta.env.VITE_OWM_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getWeatherByCity(city: string, units = 'metric', lang = 'pt_br') {
  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&units=${units}&lang=${lang}&appid=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Erro ao obter clima');
  }

  return response.json();
}
