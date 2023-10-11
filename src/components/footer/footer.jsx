import Button from "../button/button";
import React from "react";
import { createPortal } from "react-dom";
import useMediaQuery from "../../hooks/use-media-query";
import { useNavigate } from "react-router-dom";

const Footer = ({
  next,
  prev,
  submitPageData,
  both = true,
  form,
  goToNext = true,
  text = "next step",
  additionalClass,
  disabled
}) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({
    screen: "800px",
    type: "max"
  });
  return isMobile ? (
    createPortal(
      <div className="footer__container">
        <div className="prev">
          {prev && (
            <Button
              dir={"back"}
              type="button"
              onClick={() => {
                navigate(prev);
                if (submitPageData && both) {
                  submitPageData();
                }
              }}
            >
              Go back
            </Button>
          )}
        </div>
        <div className="next">
          {next && (
            <Button
              additionalClass={additionalClass}
              dir={"front"}
              type="submit"
              formName={form}
              disabled={disabled}
              onClick={() => {
                if (goToNext) {
                  navigate(next);
                }
                if (submitPageData) {
                  submitPageData();
                }
              }}
            >
              {text}
            </Button>
          )}
        </div>
      </div>,
      document.querySelector(".app__container")
    )
  ) : (
    <div className="footer__container">
      <div className="prev">
        {prev && (
          <Button
            dir={"back"}
            type="button"
            onClick={() => {
              navigate(prev);
              if (submitPageData && both) {
                submitPageData();
              }
            }}
          >
            Go back
          </Button>
        )}
      </div>
      <div className="next">
        {next && (
          <Button
            additionalClass={additionalClass}
            dir={"front"}
            type="submit"
            formName={form}
            disabled={disabled}
            onClick={() => {
              if (goToNext) {
                navigate(next);
              }
              if (submitPageData) {
                submitPageData();
              }
            }}
          >
            {text}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Footer;
