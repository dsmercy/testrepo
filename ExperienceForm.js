import React from "react";
import useAccountStore from "../../store/useAccountStore";

export default function EducationForm(props) {
  const {expData,handleEditClick} = props;
  const deleteExperiencById = useAccountStore((state) => state.deleteExperiencById);
 
  return (
    <>
      {expData && (
        <div className="edit-educ-sec">
          <h4>
            {expData.companyName},{expData.skillId}
            <span onClick={()=>deleteExperiencById(expData.id)}>
              <i className="fa fa-close"></i>
            </span>
          </h4>
          <p>
            {expData.yearOfExperience} | {expData.jobTitle}
            <span onClick={handleEditClick}>Edit</span>
          </p>
        </div>
      )}
    </>
  );
}
