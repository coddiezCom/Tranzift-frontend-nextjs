// react import
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
// image import
import Image from "next/image";
// icon import
import { FaEdit } from "react-icons/fa";
import styles from "../../styles/profile.module.scss";
// form import
import * as Yup from "yup";
import { Form, Formik, ErrorMessage } from "formik";
// component import
import Layout from "../../components/profile/layout";
import ShippingInput from "../../components/inputs/shippingInput";
export function EditKyc({}) {
  const initialValues = {
    aadhaar: "",
    pan: "",
    aadhaar_url: "",
    pan_url: "",
  };

  const [kycDoc, setKycDoc] = useState(initialValues);
  const [aadhaarFile, setAadhaarFile] = useState(null);
  const [panFile, setPanFile] = useState(null);
  const { aadhaar, pan, aadhaar_url, pan_url } = kycDoc;

  const validate = Yup.object({
    aadhaar: Yup.string()
      .required("Aadhaar Number is required.")
      .matches(/^\d{12}$/, "Aadhaar Number should be exactly 12 digits."),
    aadhaar_url: Yup.mixed()
      .required("Upload Aadhaar card is required.")
      .test("fileType", "Unsupported file format", (value) => {
        if (!value) return true;
        return value && ["image/jpeg", "image/png", "application/pdf"].includes(value.type);
      }),
    pan: Yup.string()
      .required("PAN Number is required.")
      .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN Number format. Correct format is ABCDE1234F"),
    pan_url: Yup.mixed()
      .required("Upload PAN card is required")
      .test("fileType", "Unsupported file format", (value) => {
        if (!value) return true;
        return value && ["image/jpeg", "image/png", "application/pdf"].includes(value.type);
      }),
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "aadhaar_url") {
      setAadhaarFile(files[0]);
    } else if (name === "pan_url") {
      setPanFile(files[0]);
    } else {
      setKycDoc({ ...kycDoc, [name]: value });
    }
  };

  const saveKycHandler = async () => {
    try {
      // Handle file uploads here
    } catch (error) {
      console.log("[EDIT_KYC_PAGE]", error);
    } finally {
      // Reset file states after upload
      setAadhaarFile(null);
      setPanFile(null);
    }
  };

  return (
    <div className={styles.__editKyc__container}>
      <div className={styles.header}>
        <h1>EDIT KYC</h1>
        <FaEdit />
      </div>
      <div className={styles.__form}>
        <Formik
          enableReinitialize
          initialValues={{
            aadhaar,
            aadhaar_url,
            pan,
            pan_url,
          }}
          validationSchema={validate}
          onSubmit={() => {
            saveKycHandler();
          }}
        >
          {(formik) => (
            <Form>
              <div>
                <span>
                  <ShippingInput name="aadhaar" placeholder="Aadhaar Number*" type={"number"} onChange={handleChange} />
                  <input name="aadhaar_url" type="file" onChange={handleChange} />
                  <ErrorMessage name="aadhaar_url" component="div" className="error" />
                </span>
                <span>
                  {aadhaarFile && (
                    <Image src={URL.createObjectURL(aadhaarFile)} alt="Aadhaar Card" width={500} height={500} />
                  )}
                </span>
              </div>
              <div>
                <span>
                  <ShippingInput name="pan" placeholder="PAN Number*" onChange={handleChange} />
                  <input name="pan_url" type="file" onChange={handleChange} />
                  <ErrorMessage name="pan_url" component="div" className="error" />
                </span>
                <span>
                  {panFile && <Image src={URL.createObjectURL(panFile)} alt="PAN Card" width={500} height={500} />}
                </span>
              </div>
              <span>
                <button type="submit">Save Changes</button>
                <button>Cancel</button>
              </span>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

const Index = ({ tab }) => {
  const userData = useSelector((state) => state.userDetail);
  return (
    <Layout session={userData} tab={tab}>
      <EditKyc />
    </Layout>
  );
};

export default Index;
export async function getServerSideProps(ctx) {
  const { query, req } = ctx;
  // const session = await getSession({ req });
  const tab = query.tab || 0;
  return {
    props: { tab },
  };
}
