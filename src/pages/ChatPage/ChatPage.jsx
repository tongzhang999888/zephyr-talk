import React, { useState } from "react";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
import Detail from "../../components/detail/Detail";
import "./chatpage.scss";
const ChatPage = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [showList, setShowList] = useState(false);
  return (
    <div className="chat-container">
      <Chat
        detailHandler={() => {
          setShowDetail((prev) => !prev);
        }}
        listHandler={() => {
          setShowList((prev) => !prev);
        }}
      />
      <List
        showList={showList}
        listHandler={() => {
          setShowList((prev) => !prev);
        }}
      />
      <Detail
        showDetail={showDetail}
        detailHandler={() => {
          setShowDetail((prev) => !prev);
        }}
      />
    </div>
  );
};

export default ChatPage;
