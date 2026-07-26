import { useState } from "react";
import toast from "react-hot-toast";
import PredictionCard from "../prediction/PredictionCard";
import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaBrain,
} from "react-icons/fa";

import api from "../../services/api";

import Card from "../common/Card";
import Button from "../common/Button";

import InputField from "./InputField";
import SelectField from "./SelectField";
import SliderField from "./SliderField";

export default function StudentForm() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    degree: "",
    branch: "",
    cgpa: "",
    internships: "",
    projects: "",
    coding_skills: 5,
    communication_skills: 5,
    aptitude_test_score: "",
    soft_skills_rating: 5,
    certifications: "",
    backlogs: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "number"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await api.post("/predict", formData);

      setResult(res.data);

      toast.success("Prediction Successful!");
    } catch (err) {
      console.error(err);

      toast.error("Prediction Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-8 mt-10"
      >
        <Card
          title="Personal Information"
          icon={<FaUser />}
        >
          <div className="grid md:grid-cols-2 gap-6">

            <InputField
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter Age"
            />

            <SelectField
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>
            </SelectField>

            <SelectField
              label="Degree"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
            >
              <option value="">
                Select Degree
              </option>

              <option value="B.Tech">
                B.Tech
              </option>

              <option value="B.Sc">
                B.Sc
              </option>

              <option value="BCA">
                BCA
              </option>

              <option value="MCA">
                MCA
              </option>
            </SelectField>

            <SelectField
              label="Branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
            >
              <option value="">
                Select Branch
              </option>

              <option value="CSE">
                CSE
              </option>

              <option value="IT">
                IT
              </option>

              <option value="ECE">
                ECE
              </option>

              <option value="ME">
                ME
              </option>

              <option value="Civil">
                Civil
              </option>
            </SelectField>

          </div>
        </Card>

        <Card
          title="Academic Details"
          icon={<FaGraduationCap />}
        >
          <div className="grid md:grid-cols-2 gap-6">

            <InputField
              label="CGPA"
              name="cgpa"
              type="number"
              value={formData.cgpa}
              onChange={handleChange}
              placeholder="8.5"
            />

            <InputField
              label="Backlogs"
              name="backlogs"
              type="number"
              value={formData.backlogs}
              onChange={handleChange}
              placeholder="0"
            />

            <InputField
              label="Certifications"
              name="certifications"
              type="number"
              value={formData.certifications}
              onChange={handleChange}
              placeholder="3"
            />

            <InputField
              label="Aptitude Test Score"
              name="aptitude_test_score"
              type="number"
              value={formData.aptitude_test_score}
              onChange={handleChange}
              placeholder="85"
            />

          </div>
        </Card>

        <Card
          title="Experience"
          icon={<FaBriefcase />}
        >
          <div className="grid md:grid-cols-2 gap-6">

            <InputField
              label="Projects"
              name="projects"
              type="number"
              value={formData.projects}
              onChange={handleChange}
              placeholder="4"
            />

            <InputField
              label="Internships"
              name="internships"
              type="number"
              value={formData.internships}
              onChange={handleChange}
              placeholder="2"
            />

          </div>
        </Card>

        <Card
          title="Skills"
          icon={<FaBrain />}
        >
          <div className="space-y-8">

            <SliderField
              label="Coding Skills"
              name="coding_skills"
              value={formData.coding_skills}
              onChange={handleChange}
            />

            <SliderField
              label="Communication Skills"
              name="communication_skills"
              value={formData.communication_skills}
              onChange={handleChange}
            />

            <SliderField
              label="Soft Skills"
              name="soft_skills_rating"
              value={formData.soft_skills_rating}
              onChange={handleChange}
            />

          </div>
        </Card>

        <Button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Predicting..."
            : "✨ Predict Placement"}
        </Button>
      </form>

      <PredictionCard result={result} />
    </>
  );
}