export const generateAbbreviation= (programName) => {
    // Split the program name into words
    const words = programName.split(' ');
  
    // Initialize an empty string for the abbreviation
    let abbreviation = '';
  
    // Iterate through the words and append the first letter to the abbreviation,
    // but skip the word "and"
    for (const word of words) {
      if (word.toLowerCase() !== 'and') {
        abbreviation += word.charAt(0);
      }
    }
  
    // Make sure the abbreviation is in uppercase
    abbreviation = abbreviation.toUpperCase();
  
    return abbreviation;
  }
