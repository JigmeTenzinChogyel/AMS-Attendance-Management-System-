export const eventDateFormat = (originalDate) => {
    const dateObj = new Date(originalDate);
    const day = dateObj.getUTCDate();
    const month = dateObj.getUTCMonth() + 1; // Months are 0-based, so add 1 to get the correct month
    const year = dateObj.getUTCFullYear();
    return `${day}/${month}/${year}`;
  }

export const eventToday = (inputDate) => {
  const currentDate = new Date(); // Get the current date and time
  const eventDate = new Date(inputDate); // Convert the input date to a Date object

  // Compare the event date with the current date
  if (eventDate < currentDate) {
    // The event date is in the past
    return true;
  } else if (
    eventDate.getDate() === currentDate.getDate() &&
    eventDate.getMonth() === currentDate.getMonth() &&
    eventDate.getFullYear() === currentDate.getFullYear()
  ) {
    // The event date is today
    return true;
  } else {
    // The event date is in the future (tomorrow or later)
    return false;
  }
};

export function getCurrentDate() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const amOrPm = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const formattedDate = `${month} ${day}, ${year}, ${formattedHours}:${formattedMinutes} ${amOrPm}`;
  
  return formattedDate;
}
