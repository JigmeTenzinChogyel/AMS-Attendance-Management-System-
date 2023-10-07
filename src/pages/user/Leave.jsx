import { useState } from "react";

function Leave() {
  const [formData, setFormData] = useState({
    subject: "",
    startingFrom: "",
    till: "",
    description: "",
    attachments: [],
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      // Handle file input separately for attachments
      const files = Array.from(e.target.files);
      setFormData({
        ...formData,
        attachments: files,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Parse the date strings to Date objects for comparison
    const startingFromDate = new Date(formData.startingFrom);
    const tillDate = new Date(formData.till);

    // Check if Till date is greater than or equal to Starting From date
    if (tillDate >= startingFromDate) {
      console.log("Form Data:", formData);
    } else {
      alert("Till date must be greater than or equal to Starting From date.");
    }
  };

  return (
    <div className="w-4/5 pt-10 flex flex-col gap-5">
      <h2 className="text-2xl font-bold">Leave Application Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-sm font-semibold text-slate-400">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-1/3"
            required
          />
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="startingFrom" className="text-sm font-semibold text-slate-400">
              Starting From:
            </label>
            <input
              type="date"
              id="startingFrom"
              name="startingFrom"
              value={formData.startingFrom}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="till" className="text-sm font-semibold text-slate-400">
              Till:
            </label>
            <input
              type="date"
              id="till"
              name="till"
              value={formData.till}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-sm font-semibold text-slate-400">
            Description/Reason:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="attachments" className="text-sm font-semibold text-slate-400">
            Attachments (Images or PDFs):
          </label>
          <input
            type="file"
            id="attachments"
            name="attachments"
            onChange={handleChange}
            multiple
            className="border border-gray-300 rounded-md p-2 w-fit"
          />
        </div>
        <button
          type="submit"
          className="w-fit bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Leave;

