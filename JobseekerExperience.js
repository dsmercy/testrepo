import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormWizard from "../../components/Wizard/FormWizard";
import { FormLabel } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import useAccountStore from "../../store/useAccountStore";
import ExperienceForm from './ExperienceForm'
import { element } from "of";

export const JobseekerExperience = (props) => {
  const {changeKeyValue,options,selectedOptions,handleSkills,register,errors, getValues,setValue}=props;
  const newOptions = changeKeyValue();
  const animatedComponents = makeAnimated();
  const experienceData = useAccountStore((state) => state.experienceData);
  const saveExperience = useAccountStore((state) => state.saveExperience);
  const deleteExperiencById = useAccountStore((state) => state.deleteExperiencById);
 

   const handleAddPosition = () => {
    const formValues = getValues();
    const skill =selectedOptions.map((item)=>item.id);
    const formData = [{
      expTypes: parseInt(formValues.experience),
      currentEmployee: !!formValues.currentEmployee,
      companyName: formValues.companyName,
      yearOfExperience: parseInt (formValues.yearOfExperience),
      jobTitle: formValues.jobTitle,
      startDate: formValues.startDate,
      endDate: formValues.endDate,
      skillId:skill,
      jobDescription: formValues.comment,
      salaryTypeId: parseInt(formValues.salaryTypeId),
      salary: parseInt(formValues.salary),
    }];
    saveExperience(formData);

    console.log('formData',formData);
  };

  const handleEditClick = (id) =>{
   console.log(experienceData[0].id)
    console.log('experienceData',experienceData)
    const exp = experienceData.find((element) => element.id === id);
    console.log('exp', exp);
    //  setValue("experience",exp.expTypes[0]);
    //  setValue("currentEmployee",exp.currentEmployee[0]);
    //  setValue("companyName",exp.companyName[0]);
    // setValue("yearOfExperience",exp.yearOfExperience[0]);
    deleteExperiencById(id);

  }
  return (
    <>
      <FormWizard.TabContent title="Experience" icon="fa fa-check">
        <h5>Experience</h5>
        <span className="bord"></span>
        <div className="experience">
          {experienceData && experienceData.length > 0
            ? experienceData.map((edu, index) => (
                <ExperienceForm expData={edu} key={index} handleEditClick={handleEditClick}/>
              ))
            : ""}
          <Row>
            <Col>
              <div className="fresh">
                <h4>
                  <input
                    className="form-check-input"
                    type="radio"
                    id="1"
                    value={1}
                    name="exper"
                    {...register("experience")}
                  />{" "}
                  <label htmlFor="exper">I'm Experienced</label>
                </h4>
                <p>I have work experienced (excluding internships)</p>
              </div>
            </Col>
            <Col>
              <div className="fresh-second">
                <h4>
                  <input
                    className="form-check-input"
                    type="radio"
                    id="2"
                    value={2}
                    name="exper"
                    {...register("experience")}
                  />{" "}
                  <label htmlFor="fresher">I’m a Fresher</label>{" "}
                </h4>
                <p>I‘m a Student Haven’t worked after graduation.</p>
              </div>
            </Col>
          </Row>

          <div className="current-empl">
            <h5>Is this your current employment?</h5>
            <input
              className="form-check-input"
              type="radio"
              id="1"
              value={true}
              {...register("currentEmployee")}
            />
            <label htmlFor="eyes">Yes </label>
            <input
              className="form-check-input"
              type="radio"
              id="0"
              value={false}
              {...register("currentEmployee")}
            />
            <label htmlFor="eno">No </label>
          </div>

          <FormLabel>
            Company Name <span className="text-danger">*</span>
          </FormLabel>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder="Company name"
              aria-label="Company"
              aria-describedby="basic-addon1"
              {...register("companyName", { required: true })}
              isInvalid={!!errors.companyName}
            />
          </InputGroup>

          <FormLabel>
            Years of Experience <span className="text-danger">*</span>
          </FormLabel>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder=""
              aria-label="skills"
              aria-describedby="basic-addon1"
              {...register("yearOfExperience", { required: true })}
              isInvalid={!!errors.yearOfExperience}
            />
            <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
          </InputGroup>

          <FormLabel>
            Job Title<span className="text-danger">*</span>
          </FormLabel>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder="Job Title"
              aria-label="JobTitle"
              aria-describedby="basic-addon1"
              {...register("jobTitle", { required: true })}
              isInvalid={!!errors.jobTitle}
            />
          </InputGroup>

          <Row>
            <Col>
              <FormLabel>
                Start Date <span className="text-danger">*</span>
              </FormLabel>
              <Form.Group controlId="datePicker">
                <Form.Control
                  {...register("startDate", { required: true })}
                  isInvalid={!!errors.startDate}
                  type="date"
                />
                <Form.Control.Feedback type="invalid">
                  This field is required.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col>
              <FormLabel>
                End Date <span className="text-danger">*</span>
              </FormLabel>
              <Form.Group controlId="datePicker">
                <Form.Control
                  {...register("endDate", { required: true })}
                  isInvalid={!!errors.endDate}
                  type="date"
                />
                <Form.Control.Feedback type="invalid">
                  This field is required.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormLabel>
                Skill Used <span className="text-danger">*</span>
              </FormLabel>
              <InputGroup className="mb-3">
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  options={newOptions}
                  isMulti
                  defaultValue={[options[0]]}
                  value={selectedOptions}
                  className="mb-6"
                  classNamePrefix="select"
                  {...register("skillName", { required: true })}
                  isInvalid={!!errors.skillName}
                  onChange={handleSkills}
                />
                <Form.Control.Feedback type="invalid">
                  This field is required.
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
          </Row>

          <FormLabel>Job Description</FormLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              {...register("comment")}
            />
          </FloatingLabel>

          <div className="current-salary">
            <h5>Current Salary ($)</h5>
            <input
              className="form-check-input"
              type="radio"
              value={1}
              name="salary"
              id="hourly"
              {...register("salaryTypeId")}
            />
            <label htmlFor="hourly">Hourly </label>
            <input
              className="form-check-input"
              type="radio"
              value={2}
              name="salary"
              id="monthly"
              {...register("salaryTypeId")}
            />
            <label htmlFor="monthly">Monthly</label>
            <input
              className="form-check-input"
              type="radio"
              value={3}
              name="salary"
              id="annually"
              {...register("salaryTypeId")}
            />
            <label htmlFor="annually">Annually </label>
          </div>

          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder=""
              aria-label="skills"
              aria-describedby="basic-addon1"
              {...register("salary")}
            />
            <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
          </InputGroup>

          <div className="add-position" onClick={handleAddPosition}>
            <h4>
              <i className="fa fa-plus-circle"></i> Add Position
            </h4>
          </div>
        </div>
      </FormWizard.TabContent>
    </>
  );
};
