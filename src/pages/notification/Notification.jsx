import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './notification.css'

// Sample data for notifications
const notifications = [
  {
    id: 1,
    title: 'New Message',
    sender: 'John Doe',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: 2,
    title: 'Meeting Reminder',
    sender: 'Alice Smith',
    time: '4 hours ago',
    unread: false,
  },
  {
    id: 3,
    title: 'New Friend Request',
    sender: 'Bob Johnson',
    time: '1 day ago',
    unread: true,
  },
  // Add more notifications here...
];

const itemsPerPage = 2;

function Notification() {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentNotifications = notifications.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(notifications.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % notifications.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="m-3 px-6 py-4 bg-white font-Roboto flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      {currentNotifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-4 mb-4 rounded-lg ${
            notification.unread ? 'bg-blue-100' : 'bg-white'
          } shadow-md`}
        >
          <h2 className="text-lg font-semibold">{notification.title}</h2>
          <p className="text-sm text-gray-600">
            From: {notification.sender}
          </p>
          <p className="text-sm text-gray-600">Received: {notification.time}</p>
        </div>
      ))}
      {notifications.length > itemsPerPage && (
        <div className="pagination-container">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </div>
      )}
    </div>
  );
}

export default Notification;
