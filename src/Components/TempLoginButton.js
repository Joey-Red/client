import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileButton } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
function PostButton(props) {
  let { setUserToken, setLoggedIn } = props;
  // let config = {
  //   headers: {
  //     Authorization:
  //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzYTIyYmM1NTZjYzIyZjI1ZDIyNDhkNyIsInVzZXJuYW1lIjoiRXJpYyIsInBhc3N3b3JkIjoiJDJiJDEwJE1KRjBNN1dpREVkdHhLTXJ2RWNONy5EQy9Cd0JmY3hKQ05LREFMSDNOU01CcnlrZ2dZSVhTIiwiZGF0ZUNyZWF0ZWQiOiJUdWUgRGVjIDIwIDIwMjIgMTU6NDA6MjEgR01ULTA2MDAgKENlbnRyYWwgU3RhbmRhcmQgVGltZSkiLCJyb2xlcyI6W10sIl9fdiI6MH0sImlhdCI6MTY3MjczOTYwOSwiZXhwIjoxNjcyNzQwODA5fQ.kiIWYEgwhx853x11KmPvduCt4qqxoiks1B1almgf4oM",
  //   },
  // };
  let login = () => {
    axios
      .post(
        "http://localhost:8080/user/log-in",
        {
          username: "Eric",
          password: "supersecretpassword",
        }
        // config
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setUserToken(res.data.token);
          setLoggedIn(true);
        } else {
          console.log("err logging in");
        }
      })
      .catch();
  };
  return (
    <div className="fixed bottom-[70px] left-5">
      <button
        onClick={login}
        className="bg-red-500 h-14 w-14 rounded-full flex justify-center items-center shadow-md"
      >
        <FontAwesomeIcon
          icon={faMobileButton}
          className="text-white"
          size="lg"
        />
      </button>
    </div>
  );
}

export default PostButton;
