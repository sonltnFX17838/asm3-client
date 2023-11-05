import React, { useState, useEffect, useRef } from "react";

import { SendIcon, CustommerIcon } from "../../images/icon/icon";
import io from "socket.io-client";

const host = process.env.REACT_APP_SERVER;

const ChatWindown = ({ onCloseChat, show }) => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const socketRef = useRef();
  const messagesEnd = useRef();
  const roomId = JSON.parse(localStorage.getItem("roomId"));

  useEffect(() => {
    socketRef.current = io.connect(host);

    if (!roomId) {
      socketRef.current.emit("createRoom");
      socketRef.current.on("createRoom", (data) => {
        localStorage.setItem("roomId", JSON.stringify(data._id));
        setChatHistory(data.sessionChat);
      });
    } else {
      console.log(roomId);
      socketRef.current.emit("connecting", roomId);
      socketRef.current.emit("getStart", roomId);
    }
    socketRef.current.on(`chat${roomId}`, (dataGot) => {
      setChatHistory(dataGot);
      scrollToBottom();
    });

    window.onbeforeunload = () => {
      socketRef.current.emit("clientOff", roomId);
    };

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const scrollableDivRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const scrollToBottom = () => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop =
        scrollableDivRef.current.scrollHeight;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (chatHistory) {
      setChatHistory([...chatHistory, message]);
    } else {
      setChatHistory([message]);
    }
    if (message === "/end") {
      socketRef.current.emit("end", roomId);
      localStorage.removeItem("roomId");
    }
    if (message !== null) {
      const msg = {
        content: message,
        role: "Client",
      };
      socketRef.current.emit("messSend", roomId, msg);
      setMessage("");
    }
  };

  return (
    <div
      className="position-fixed shadow-lg rounded-4 px-3 pt-3 bg-white d-flex flex-column justify-content-between"
      style={{
        zIndex: show ? "5" : "-5",
        left: "60%",
        top: "10%",
        height: "400px",
        width: "380px",
      }}
    >
      <div className="d-flex justify-content-between border-bottom pb-2">
        <p className="m-0 pt-1 fw-bold">Custommer support</p>
        <div className="d-flex gap-2">
          <button className="bg-primary-subtle border border-0 rounded-3">
            <small>Let's chat app</small>
          </button>
          <button className="btn btn-primary btn-hover" onClick={onCloseChat}>
            X
          </button>
        </div>
      </div>
      <div
        className="d-flex flex-column justify-content-start h-75 gap-1"
        style={{ overflowY: "auto", paddingBottom: "24px" }}
        ref={scrollableDivRef}
      >
        {chatHistory &&
          chatHistory.map((message, index) => (
            <div
              className="d-flex"
              key={index}
              style={{
                margin: message.role === "Client" ? "0 0 0 50px" : "0 50px 0 0",
                justifyContent: message.role === "Client" ? "flex-end" : "",
              }}
            >
              {message.role === "Counselors" && <CustommerIcon />}
              <p
                className="my-auto px-1"
                style={{
                  backgroundColor:
                    message.role === "Client" ? "rgba(0,0,0,0.1)" : "",
                  borderRadius: "8px",
                }}
              >
                {message.content}
              </p>
            </div>
          ))}
        <div style={{ float: "left", clear: "both" }} ref={messagesEnd}></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="border-top d-flex align-items-center mb-2 justify-content-between"
      >
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="border border-0 w-100"
          placeholder="Enter Message!!"
        />

        <button className="btn pb-2" type="submit">
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default ChatWindown;
