import React, { useState, useEffect } from "react";
import firebase from "firebase";
import dB from "./firebase";
import { Button } from "@material-ui/core";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

import "./App.css";

import Message from "./components/Message/Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Please enter your username"));

    dB.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapShot) => {
        setMessages(
          snapShot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  // useEffect(() => {

  // }, [messages])
  const sendMessage = (e) => {
    e.preventDefault();

    dB.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>Hello Facebook Clone</h1>
      <h2>Welcome, {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            placeholder="Enter a message..."
            id="my-input"
            aria-describedby="my-helper-text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="app__input"
          />
          <IconButton
            className="app__iconButton"
            type="submit"
            variant="contained"
            color="primary"
            onClick={(e) => sendMessage(e)}
            disabled={!input}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => {
          return <Message key={id} username={username} message={message} />;
        })}
      </FlipMove>
    </div>
  );
}

export default App;
