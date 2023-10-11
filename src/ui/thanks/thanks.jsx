import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { useThanksContext } from "./thanks-context";

const Thanks = () => {
  const { pageData, userData } = useThanksContext();
  console.log(userData);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData.subConfirmed) {
      navigate("/", {
        replace: true
      });
    }
  }, [navigate, userData.subConfirmed]);

  return (
    <>
      <Header title={pageData.header.title} content={pageData.header.content} />

      <div className="thanks__container navigation-content">
        {userData.user ? (
          <p>
            Your subscription has be saved successfully , we will send an email
            for payment confirmation.
          </p>
        ) : (
          <p>
            You are yet to sign in properly, please sign in{" "}
            <span className="here">
              <Link to={"/info"}>here</Link>
            </span>{" "}
            for your subscription to be completed.
          </p>
        )}
      </div>

      <Footer next={pageData.footer.next} prev={pageData.footer.prev} />
    </>
  );
};

export default Thanks;
