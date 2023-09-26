import notificationList from "../../../Data/notfication";

function Notification() {
  const titleLength = (data) => {
    const title = data;
    let truncatedTitle = title || "";
    if (title && title.length > 20) {
      truncatedTitle = title.slice(0, 20) + "...";
    }
    return truncatedTitle;
  };

  const descriptionLength = (data) => {
    const description = data;
    let truncatedDescription = description || "";
    if (description && description.length > 80) {
      truncatedDescription = description.slice(0, 80) + "...";
    }
    return truncatedDescription;
  };

  let notificationLimit = 0;

  return (
    <div className="h-2/4 bg-white rounded-lg px-4 py-2 text-center ">
      <h2 className="text-sm font-semibold mb-2">Notifications</h2>
      {notificationList.map((data) => {
        if (notificationLimit < 3) {
          notificationLimit++;
          return (
            <div key={data.id} className="hover:bg-sky-100 text-left text-xs px-2 pb-3 pt-1 bg-slate-100 mb-1 rounded-md cursor-pointer">
              <div className="flex justify-between mb-2">
                <h1 className="text-sm font-semibold">{titleLength(data.title)}</h1>
                <span className="text-blue-600 font-semibold">{data.date}</span>
              </div>
              <p className="font-light text-slate-800">{descriptionLength(data.descripation)}</p>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default Notification;
