export const generateCombinations = (programs, years, studentDetails) => {

  const combinations = [];
  const studentCount = studentDetails.length;

  programs.forEach((program) => {
    years.forEach((year) => {
      if (program.name === "Architecture" || year.name !== "5") {
        combinations.push({
          year: year.name,
          program: program.name,
          check: true,
          assigned: "", // Add an empty string for 'assigned'
        });
      }
    });
  });

  if (studentCount === 0) {
    return combinations; // Return combinations as is if no students
  }

  const combineLength = combinations.length;

  if (combineLength === 0) {
    return combinations; // Return empty combinations if no combinations
  }

  const assignLength = Math.floor(combineLength / studentCount);
  const remainingCombinations = combineLength % studentCount;

  studentDetails.forEach((student, index) => {
    const combinationsToAssign = index < remainingCombinations ? assignLength + 1 : assignLength;

    for (let i = 0; i < combinationsToAssign; i++) {
      const combinationIndex = index * assignLength + i;
      if (combinationIndex < combineLength) {
        combinations[combinationIndex].assigned = student.studentId;
      }
    }
  });

  // Assign any remaining combinations to the last student
  for (let i = combineLength - 1; i >= 0; i--) {
    if (combinations[i].assigned === "") {
      combinations[i].assigned = studentDetails[studentCount - 1].studentId;
    }
  }

  return combinations;
};
