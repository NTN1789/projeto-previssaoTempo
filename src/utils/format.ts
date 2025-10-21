export function formatTemperature(temp: number): string {
  return `${Math.round(temp)}°C`;
}

export function formatTime(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function formatWind(speed: number, deg: number): string {
  const directions = ['N', 'NE', 'L', 'SE', 'S', 'SO', 'O', 'NO'];
  const index = Math.round(deg / 45) % 8;
  return `${speed.toFixed(1)} m/s ${directions[index]}`;
}

export function formatVisibility(visibility: number): string {
  return `${(visibility / 1000).toFixed(1)} km`;
}

export function formatPressure(pressure: number): string {
  return `${pressure} hPa`;
}
