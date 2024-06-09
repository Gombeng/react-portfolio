import { useState, useEffect } from "react";

function Alerts({ type, title, message, onClose }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!type) return;
    const timer = setTimeout(() => {
      setExiting(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [type]);

  useEffect(() => {
    if (exiting) {
      const timer = setTimeout(() => {
        onClose();
        setExiting(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [exiting, onClose]);

  if (!type) {
    return null;
  }

  const isError = type === "error";
  const alertClass = isError
    ? "rounded-md border-s-2 border-red-500 bg-red-50 p-4"
    : "rounded-md border-s-2 border-green-500 bg-white p-4";
  const icon = isError ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-red-800"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-6 w-6 text-green-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
  const titleClass = isError
    ? "block font-medium text-red-800"
    : "block font-medium text-gray-900";
  const messageClass = isError
    ? "mt-2 text-sm text-red-700"
    : "mt-1 text-sm text-gray-700";

  return (
    <div
      role="alert"
      className={`text-left absolute top-3 m-10 ${alertClass} ${
        exiting ? "alert-exit" : "alert"
      }`}
    >
      <div className="flex items-start gap-2">
        <span className="mt-1">{icon}</span>
        <div className="flex-1">
          <strong className={titleClass}>{title}</strong>
          <p className={`max-w-xs ${messageClass}`}>{message}</p>
        </div>
        <button
          onClick={() => setExiting(true)}
          className="text-gray-500 transition hover:text-gray-600"
        >
          <span className="sr-only">Dismiss popup</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Alerts;
