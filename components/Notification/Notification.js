import ReactDOM from "react-dom";
import s from "./notification.module.css";

function Notification({ title, message, status }) {
  const statusClasses = status === "success" ? classes.success : classes.error;
  const cssClasses = `${s.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")
  );
}

export default Notification;
