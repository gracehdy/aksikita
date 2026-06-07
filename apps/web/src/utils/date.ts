export const formatDate = (dateString: string | Date) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("id-ID", options);
};

export const formatDateWithTime = (date: Date | string): string => {
  if (!date) return '';
  const d = new Date(date);
  const day = d.toLocaleDateString('id-ID', { weekday: 'long' });
  const dateStr = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  return `${day}, ${dateStr} pukul 08.00`;
};


