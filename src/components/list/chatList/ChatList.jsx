import "./chatList.scss";
import React, { useState } from "react";

const ChatList = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const addHandler = () => {
    setOpenAdd((prev) => !prev);
  };
  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchbar">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z"
            />
          </svg>
          <input type="text" placeholder="Search" />
        </div>

        {openAdd ? (
          <svg
            onClick={addHandler}
            className="add"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fillRule="evenodd"
              sketch:type="MSPage"
            >
              <g
                id="Icon-Set-Filled"
                sketch:type="MSLayerGroup"
                transform="translate(-518.000000, -1089.000000)"
              >
                <path
                  d="M540,1106 L528,1106 C527.447,1106 527,1105.55 527,1105 C527,1104.45 527.447,1104 528,1104 L540,1104 C540.553,1104 541,1104.45 541,1105 C541,1105.55 540.553,1106 540,1106 L540,1106 Z M534,1089 C525.163,1089 518,1096.16 518,1105 C518,1113.84 525.163,1121 534,1121 C542.837,1121 550,1113.84 550,1105 C550,1096.16 542.837,1089 534,1089 L534,1089 Z"
                  id="minus-circle"
                  sketch:type="MSShapeGroup"
                ></path>
              </g>
            </g>
          </svg>
        ) : (
          <svg
            onClick={addHandler}
            className="add"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fillRule="evenodd"
              sketch:type="MSPage"
            >
              <g
                id="Icon-Set-Filled"
                sketch:type="MSLayerGroup"
                transform="translate(-466.000000, -1089.000000)"
              >
                <path
                  d="M488,1106 L483,1106 L483,1111 C483,1111.55 482.553,1112 482,1112 C481.447,1112 481,1111.55 481,1111 L481,1106 L476,1106 C475.447,1106 475,1105.55 475,1105 C475,1104.45 475.447,1104 476,1104 L481,1104 L481,1099 C481,1098.45 481.447,1098 482,1098 C482.553,1098 483,1098.45 483,1099 L483,1104 L488,1104 C488.553,1104 489,1104.45 489,1105 C489,1105.55 488.553,1106 488,1106 L488,1106 Z M482,1089 C473.163,1089 466,1096.16 466,1105 C466,1113.84 473.163,1121 482,1121 C490.837,1121 498,1113.84 498,1105 C498,1096.16 490.837,1089 482,1089 L482,1089 Z"
                  id="plus-circle"
                  sketch:type="MSShapeGroup"
                ></path>
              </g>
            </g>
          </svg>
        )}
      </div>
      <div className="userchatlist">
        <div className="chatitem">
          <img src="/avatar.png" alt="" />
          <div className="info">
            <span className="username">Mike</span>
            <span className="message">hello</span>
          </div>
        </div>
        <div className="chatitem">
          <img src="/avatar.png" alt="" />
          <div className="info">
            <span className="username">Mike</span>
            <span className="message">hello</span>
          </div>
        </div>
        <div className="chatitem">
          <img src="/avatar.png" alt="" />
          <div className="info">
            <span className="username">Mike</span>
            <span className="message">hello</span>
          </div>
        </div>
        <div className="chatitem">
          <img src="/avatar.png" alt="" />
          <div className="info">
            <span className="username">Mike</span>
            <span className="message">hello</span>
          </div>
        </div>
        <div className="chatitem">
          <img src="/avatar.png" alt="" />
          <div className="info">
            <span className="username">Mike</span>
            <span className="message">hello</span>
          </div>
        </div>
        <div className="chatitem">
          <img src="/avatar.png" alt="" />
          <div className="info">
            <span className="username">Mike</span>
            <span className="message">hello</span>
          </div>
        </div>
        <div className="chatitem">
          <img src="/avatar.png" alt="" />
          <div className="info">
            <span className="username">Mike</span>
            <span className="message">hello</span>
          </div>
        </div>
        <div className="chatitem">
          <img src="/avatar.png" alt="" />
          <div className="info">
            <span className="username">Mike</span>
            <span className="message">hello</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
