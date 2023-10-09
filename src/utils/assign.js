export const generateCombinations = (programs, years) => {
    const combinations = [];
  
    programs.forEach((program) => {
      years.forEach((year) => {
        if (program.name === "Architecture" || year.name !== "5") {
          combinations.push({
            year: year.name,
            program: program.name,
            check: false,
            assigned: "", // Add an empty string for 'assigned'
          });
        }
      });
    });
  
    return combinations;
  };
  