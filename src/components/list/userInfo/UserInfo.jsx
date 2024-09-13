import "./userInfo.scss";
import React from "react";

const UserInfo = () => {
  return (
    <div className="userinfo">
      <div className="user">
        <img src="/avatar.png" alt="avatar" />
        <h2>Linda Blues</h2>
      </div>
      <div className="icons">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="12" r="2" transform="rotate(90 20 12)" />
          <circle cx="12" cy="12" r="2" transform="rotate(90 12 12)" />
          <circle cx="4" cy="12" r="2" transform="rotate(90 4 12)" />
        </svg>
        {/* <img src="/video.png" alt="video" /> */}
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M15.198 3.52a1.612 1.612 0 012.223 2.336L6.346 16.421l-2.854.375 1.17-3.272L15.197 3.521zm3.725-1.322a3.612 3.612 0 00-5.102-.128L3.11 12.238a1 1 0 00-.253.388l-1.8 5.037a1 1 0 001.072 1.328l4.8-.63a1 1 0 00.56-.267L18.8 7.304a3.612 3.612 0 00.122-5.106zM12 17a1 1 0 100 2h6a1 1 0 100-2h-6z"
          />
        </svg>
      </div>
    </div>
  );
};

export default UserInfo;
