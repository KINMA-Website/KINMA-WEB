import "./Loading.css";

function Loading({ show, text = "กำลังโหลด..." }) {
  if (!show) return null;

  return (
    <div className="loading-overlay">

      <div className="loading-box">

        <div className="loading-spinner"></div>

        <h3>{text}</h3>

        <p>กรุณารอสักครู่...</p>

      </div>

    </div>
  );
}

export default Loading;
