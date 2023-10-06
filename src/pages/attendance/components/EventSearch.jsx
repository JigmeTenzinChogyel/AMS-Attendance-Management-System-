import { useState } from 'react';

function EventSearch() {
  const typeOptions = ["Assembly", "Supw", "Others"];
  const statusOptions = ["Completed", "Scheduled"];
  const dateOptions = ["Today", "This Month", "Past 6 Months", "This Year", "All"];

  const [filters, setFilters] = useState({
    type: '',
    status: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  }

  const handleClear = () => {
    setFilters({
      type: '',
      status: '',
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
        console.log(filters);
    }

    // Clear the filters
    handleClear();
  }

  return (
    <div className='w-full flex justify-center items-center'>
      <form onSubmit={handleSearch} className='flex items-center justify-between w-full gap-5'>
        <div className='flex gap-4'>
            <select
              name="type"
              className='border p-3'
              value={filters.type}
              onChange={handleChange}>
              <option value="">Select type</option>
              {typeOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <select
              name="status"
              className='border p-3'
              value={filters.status}
              onChange={handleChange}>
              <option value="">Select status</option>
              {statusOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <select
              name="date"
              className='border p-3'
              value={filters.date}
              onChange={handleChange}>
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

export default EventSearch;
