import React, { useState } from "react";
import useAccountStore from "../../store/useAccountStore";

export default function EducationForm(props) {
  const saveEducation = useAccountStore((state) => state.saveEducation);
  const { eduData, setValue } = props;
  const handleEdit = () => {
    console.log("daata", eduData);
    console.log("fieldOfStudy", eduData.fieldOfStudy[0]);
    console.log("clgName", eduData.clgName[0]);
    setValue("degreeName", eduData.degreeName[0]);
    setValue("fieldOfStudy", eduData.fieldOfStudy[0]);
    setValue("clgName", eduData.clgName[0]);
    setValue("yearOfCompletion", eduData.yearOfCompletion[0]);
  };
  const handleDelete = (index) => {
    // console.log(index)
    //   const updatedList = eduData.filter((item,i) => item.i !== index);
    //   saveEducation(updatedList);
    //  console.log(updatedList);
    //console.log('delete');
  };
  return (
    <>
      {eduData && (
        <div className="edit-educ-sec">
          <h4>
            {eduData.degreeName[1]},{eduData.fieldOfStudy[1]}
            <span>
              <i className="fa fa-close"></i>
            </span>
          </h4>
          <p>
            {eduData.clgName[1]} | {eduData.yearOfCompletion[1]}{" "}
            <span onClick={handleEdit}>Edit</span>
          </p>
        </div>
      )}
    </>
  );
}
