import React, { useState } from "react";

function DeletedNotif() {
  let [timeExpired, setTimeExpired] = useState(false);
  setTimeout(() => {
    setTimeExpired(true);
  }, 3000);

  return (
    <>
      {!timeExpired && (
        <div className="text-red-600/40 text-center mt-3">Post deleted</div>
      )}
    </>
  );
}

export default DeletedNotif;
