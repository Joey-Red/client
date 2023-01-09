import React from "react";

export default function SuccessNotification(props) {
  let { setAvatarNotif } = props;
  setTimeout(() => {
    setAvatarNotif(false);
  }, 3000);

  return (
    <div className="fixed top-0 right-0 left-0 bg-red-500 z-50">
      <div className="flex justify-center text-white font-bold text-lg">
        Please select an Avatar.
      </div>
    </div>
  );
}
