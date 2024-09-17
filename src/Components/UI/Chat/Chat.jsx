import React, { useState } from 'react'
import { Container, IconButton } from '@mui/material'
import styles from "./index.module.scss"
import InputEmoji from "react-input-emoji";
import logo from "../../assets/images/logo.png";
import userimage from "../../assets/images/profile.png";
import logomessage from "../../assets/images/messagelogo.png";
import { FileIcon, MessageRowIcon, SendIcon } from 'helpers/Protected/icons'

const Chat = () => {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    // console.log("enter", text);
  }
  return (
    <Container>
    <div className={styles.chat}>
      <div className={styles.chatHeader}>
        <img src={logo} alt="payzone-logo" className={styles.logo} />
      </div>

      <div className={styles.messages}>
        <div className={styles.message_user}>
          <div className={styles.content}>
            <p>Would it be possible for you to email me this afternoon?</p>
            <p className={styles.time}>8:20 PM</p>
            <span>
              <MessageRowIcon />
            </span>
          </div>
          <div className={styles.user_image}>
            <img src={userimage} alt="usericon" />
          </div>
        </div>

        <div className={styles.message_admin}>
          <div className={styles.user_image}>
            <img src={logomessage} alt="usericon" />
          </div>
          <div className={styles.content}>
            <p>Would it be possible for you to email me this afternoon?</p>
            <p className={styles.time}>8:20 PM</p>
            <span>
              <MessageRowIcon iconSide={false} />
            </span>
          </div>
        </div>
      </div>

      <form className={styles.chatForm} /*onSubmit={handleSendMessage}*/>
        <div className={styles.fileInput}>
          <IconButton color="primary" component="label">
            <FileIcon />
            <input type="file" hidden /*onChange={handleFileChange}*/ />
          </IconButton>
        </div>
        <div className={styles.messageInput}>
          <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Write a message ..."
            borderRadius={0}
            background={"transparent"}
            borderColor="transparent"
            color="#fff"
            fontSize={16}
          />
          <IconButton type="submit" color="primary">
            <SendIcon />
          </IconButton>
        </div>
      </form>
    </div>
  </Container>
  )
}

export default Chat