import { useState } from 'react';

function StudentSearch({ giveFilter }) {

  const programOptions = [
    "Information Technology",
    "Electronics and Communications Engineering",
    "Electrical Engineering",
    "Engineering Geology",
    "Architecture",
    "Instrumentation and Control Engineering",
    "Software Engineering",
    "Water Resource Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
  ];

  const semesterOptions = [
    "i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x",
  ];

  const genderOptions = [
    "Male", "Female",
  ];

  const dateOptions = [
    "Today", "This Month", "Past 6 Months", "This Year", "All"
  ];

  const [filters, setFilters] = useState({
    programme: '',
    gender: '',
    semester: '',
    date: '',
  });

  const handleClear = () => {
    setFilters({
      programme: '',
      gender: '',
      semester: '',
      date: '',
    });
  }

  const handleSearch = (e) => {
    e.preventDefault();
  
    // // Create an object to store filter options with values
    // const filteredOptions = {};
  
    // // Check and store filter options with values
    // if (filters.programme !== "") {
    //   filteredOptions.programme = filters.programme;
    // }
    // if (filters.gender !== "") {
    //   filteredOptions.gender = filters.gender;
    // }
    // if (filters.semester !== "") {
    //   filteredOptions.semester = filters.semester;
    // }
    // if (filters.date !== "") {
    //   filteredOptions.date = filters.date;
    // }
  
    // Perform the search logic based on the filtered options
    // Check if filteredOptions is not empty before calling giveFilter
    if (Object.keys(filters).length !== 0) {
        giveFilter(filters);
    }

    // Clear the filters
    handleClear();
  }
  

  return (
    <div className='w-full flex justify-center items-center'>
      <form onSubmit={handleSearch} className='flex items-center justify-between w-full'>
        <div className='flex gap-4'>
          <select
            name="programme"
            className='border p-3 w-2/6'
            value={filters.programme}
            onChange={(e) => setFilters({ ...filters, programme: e.target.value })}>
            <option value="">Select Programme</option>
            {programOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <select
            name="gender"
            className='border p-3 w-1/6'
            value={filters.gender}
            onChange={(e) => setFilters({ ...filters, gender: e.target.value })}>
            <option value="">Select Gender</option>
            {genderOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <select
            name="semester"
            className='border p-3 w-1/6'
            value={filters.semester}
            onChange={(e) => setFilters({ ...filters, semester: e.target.value })}>
            <option value="">Select Semester</option>
            {semesterOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <select
            name="date"
            className='border p-3 w-1/6'
            value={filters.date}
            onChange={(e) => setFilters({ ...filters, date: e.target.value })}>
            <option value="">Select Date</option>
            {dateOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className='flex gap-5 my-5'>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-base py-2 px-3 rounded mr-2">
            Filter
          </button>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-semibold text-base py-2 px-3 rounded"
            onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}

export default StudentSearch;
