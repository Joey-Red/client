import React from "react";

export default function SuccessNotification(props) {
  let { setSuccessNotif } = props;
  setTimeout(() => {
    setSuccessNotif(false);
  }, 3000);

  return (
    <div className="fixed top-0 right-0 left-0 bg-green-500 z-50">
      <div className="flex justify-center text-white font-bold text-lg">
        Success!
      </div>
    </div>
  );
}
