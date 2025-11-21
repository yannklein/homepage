export type Event = {
  id: number;
  tky_even_meetup_id: number;
  meetup_event_id: string;
  name: string;
  venue: string;
  local_date: string | null;
  url: string;
  description: string;
  event_date: string; // ISO 8601 format (e.g., "2025-02-03T13:30:00.000Z")
  created_at: string; // ISO 8601 format
  updated_at: string; // ISO 8601 format
};

export type EventObject = {
  remainingDays: number;
  eventDetails: Event;
};

const formatEventArray = (data: Event[]) => {  
  // Get today's date
  const today = new Date();
  // Calculate the date 14 days from now
  const next14Days = new Date();
  next14Days.setDate(today.getDate() + 14);
  return data
    .filter(event => new Date(event.event_date) > today && new Date(event.event_date) < next14Days)
    .map(event => {
    const diff: number = (new Date(event.event_date).getTime() - new Date().getTime()) / 10;
    const remainingDays = Math.round(
      diff / (1000 * 60 * 60 * 24)
    );
    const eventDetails = event;
    return { remainingDays, eventDetails };
  });
};

export const fetchTokyoEvents = (callback: (arg0: EventObject[]) => void) => {
  const url = 'https://tokyo-events.herokuapp.com/api/events?city=barcelona';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      callback(formatEventArray(data));
    });
};

