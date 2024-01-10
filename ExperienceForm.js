import React from "react";
import useAccountStore from "../../store/useAccountStore";

export default function EducationForm(props) {
  const { expData ,setValue} = props;
  const handleEdit = () => {
    console.log("daata", expData);
    // console.log("fieldOfStudy", eduData.fieldOfStudy[0]);
    // console.log("clgName", eduData.clgName[0]);
    // setValue("degreeName", eduData.degreeName[0]);
    // setValue("fieldOfStudy", eduData.fieldOfStudy[0]);
    // setValue("clgName", eduData.clgName[0]);
    // setValue("yearOfCompletion", eduData.yearOfCompletion[0]);
  };
  
 
  return (
    <>
      {expData && (
        <div className="edit-educ-sec">
          <h4>
            {expData.companyName},{expData.skillId}
            <span>
              <i className="fa fa-close"></i>
            </span>
          </h4>
          <p>
            {expData.yearOfExperience} | {expData.jobTitle}
            <span onClick={handleEdit}>Edit</span>
          </p>
        </div>
      )}
    </>
  );
}
