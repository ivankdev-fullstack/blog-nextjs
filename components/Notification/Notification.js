import s from "./Notification.module.css";

function Notification({ title, message, status }) {
  const statusClasses =
    status === "success" ? s.success : status === "error" ? s.error : "";
  const cssClasses = `${s.notification} ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
