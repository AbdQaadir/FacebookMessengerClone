import { Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import { Card, CardContent } from "@material-ui/core";

import "./Message.css";

const Message = forwardRef(({ key, message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card
        key={key}
        className={isUser ? "message__userCard" : "message__guestCard"}
      >
        <CardContent>
          <Typography color="primary" variant="h5" component="h2">
            {!isUser ? `${message.username || "Unkown User"} :` : ""}{" "}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
      {/* <h2>
        {username} : {text}
      </h2> */}
    </div>
  );
});

export default Message;
