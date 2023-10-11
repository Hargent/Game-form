import React, { useState } from "react";

import AddOn from "../../components/add-on/add-on";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { useAddOnsContext } from "./add-ons-context";

const AddOns = () => {
  const { pageData, submitAddOnsData } = useAddOnsContext();

  const [checkedItems, setCheckedItems] = useState(
    pageData.checkedItems.length > 0 ? [...pageData.checkedItems] : []
  );

  const addCheckedItem = (item) => {
    const isContains =
      checkedItems.filter((checkedItem) => checkedItem.title === item.title)
        .length !== 0;
    if (isContains) {
      setCheckedItems((checkedItems) =>
        checkedItems.filter((checkedItem) => checkedItem.title !== item.title)
      );
    } else {
      setCheckedItems((checkedItems) => [...checkedItems, item]);
    }
  };

  const submitPageData = () => {
    submitAddOnsData(checkedItems);
  };

  return (
    <>
      <Header title={pageData.header.title} content={pageData.header.content} />

      <div className="add-ons__container ">
        {pageData.content.map((data, index) => (
          <AddOn
            addOn={data}
            key={index}
            addCheckedItem={addCheckedItem}
            checkedItem={checkedItems.map((item) => item.title)}
          />
        ))}
      </div>
      <Footer
        next={pageData.footer.next}
        prev={pageData.footer.prev}
        both={true}
        submitPageData={submitPageData}
      />
    </>
  );
};

export default AddOns;
