const hourData = [], minuteData = []

export function getTimeHours() {
  for (let i = 0; i < 24; i++) {
    const hour = i < 10 ? `0${i}` : `${i}`;
    hourData.push(`${hour}`);
  }
  return hourData;
}

export function getTimeMins() {
  for (let j = 0; j < 60; j += 1) {
    const minute = j < 10 ? `0${j}` : `${j}`;
    minuteData.push(`${minute}`);
  }
  return minuteData;
}