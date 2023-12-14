import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="container bottomPage">
        <div className="footer_block">
          <img src="/asset 4.svg" alt="" />
          <span>
            <h4>Free Support</h4>
            <p>Lorem Ipsum is simple dummy text</p>
          </span>
        </div>
        <div className="footer_block">
          <img src="/asset 5.svg" alt="" />
          <span>
            <h4>Consulting</h4>
            <p>Lorem Ipsum is simple dummy text</p>
          </span>
        </div>
        <div className="footer_block">
          <img src="/asset 6.svg" alt="" />
          <span>
            <h4>Online Care</h4>
            <p>Lorem Ipsum is simple dummy text</p>
          </span>
        </div>
      </footer>
      <div className="container trademark">
        <p>@Voyage Imaging 2023 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
