import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";
import React from "react";
import { useSummaryContext } from "./summary-context";

const Summary = () => {
  const { summaryData, pageData, handleSubConfirmation } = useSummaryContext();
  const { plan, addOns, monthly } = summaryData;

  const totalPrice =
    plan?.[0]?.rate + addOns.reduce((acc, addOn) => acc + addOn?.price, 0) || 0;

  const confirmSubscription = () => {
    handleSubConfirmation(true);
  };
  return (
    <>
      <Header title={pageData.header.title} content={pageData.header.content} />

      <div className="summary__container ">
        <div className="summary__details">
          {plan?.length <= 0 ? (
            <p className="no-data">
              No plans data found , click <Link to={"/plans"}>here</Link> to
              chose a plan{" "}
            </p>
          ) : (
            <div className="summary__details-plans">
              <div className="summary__details-plans-plan">
                <p>
                  {plan[0]?.type}
                  <span>&nbsp;({monthly ? "monthly" : "yearly"})</span>
                </p>
                <Link to={"/plans"}>change</Link>
              </div>
              <figure>${plan[0]?.rate}/yr</figure>
            </div>
          )}
          {addOns.length <= 0 ? (
            <p className="no-data">
              No add ons data found,click <Link to={"/add-ons"}>here</Link> to
              chose add ons for your subscription.{" "}
            </p>
          ) : (
            <div className="summary__details-addons">
              {addOns.map((addOn) => {
                return (
                  <div
                    key={addOn.title}
                    className="summary__details-addons-item"
                  >
                    <p>
                      <span>{addOn?.title}</span>
                    </p>
                    <figure>+${addOn?.price}/yr</figure>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="summary__total">
          <p>Total&nbsp;(per {monthly ? "month" : "year"})</p>
          <figure>${totalPrice ? totalPrice : 0}/yr</figure>
        </div>
      </div>

      <Footer
        additionalClass={"button-confirm"}
        next={pageData.footer.next}
        prev={pageData.footer.prev}
        text="confirm"
        submitPageData={confirmSubscription}
        disabled={totalPrice === 0}
      />
    </>
  );
};

export default Summary;
