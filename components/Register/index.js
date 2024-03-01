// import { LoginForm, SignUpForm } from "@/pages/signin";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "@/styles/signin.module.scss";
import Router from "next/router";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { HiMiniLockClosed } from "react-icons/hi2";
import { red } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Image from "next/image";
import * as Yup from "yup"; // Import Yup for validation
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import apiHelper from "@/utils/apiHelper";
import { setCookie } from "nookies"; // Import nookies package
import { useDispatch, useSelector } from "react-redux";
import { SetUserDetail, toggleSidebar } from "@/store/UserSlice";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useRouter } from "next/router";
import { debounce } from "lodash"; // Import debounce function
// Import debounce func
const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Invalid email format"),
  password: Yup.string().required("Password is required"),
});

export const LoginForm = ({ gotoSignUp, handleModal }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    console.log(e.target.value);
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await validationSchema.validate(formData, { abortEarly: false });
      const loginRes = await apiHelper("authenticate/login", {}, "Post", {
        email: formData.email,
        password: formData.password,
      });
      console.log(loginRes, "loginRes");
      dispatch(
        SetUserDetail({
          user_name: loginRes.user.userName,
          email_id: loginRes.user.email,
          token: loginRes.token,
          firstName: loginRes.user.firstName,
          lastName: loginRes.user.lastName,
          phone: loginRes.user.phone,
        })
      );
      // Set the token in a cookie
      setCookie(null, "token", loginRes.token, {
        path: "/", // Set the cookie path
        maxAge: 24 * 60 * 60, // Cookie expiration time in seconds (e.g., 30 days)
        // Other options can be set as well, such as 'secure', 'httpOnly', 'sameSite', etc.
      });
      handleModal(false);
    } catch (validationErrors) {
      console.log(validationErrors, "validationErrors");
      const newErrors = {};
      setErrors(newErrors);
    }
  };
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.__container}>
      <div className={`${styles.formContainer}`}>
        <div className={`flex justify-center flex-col mx-auto ${styles.formHeader}`}>
          <h3 className="mt-1 text-center text-xl font-extrabold text-gray-700 font-serif">Sign In To Tranzift</h3>
        </div>
        <Box
          className={styles.LoginForm}
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5em",
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="email"
            label="Email Address"
            type="email"
            multiline
            maxRows={4}
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <div className="flex items-center justify-between">
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
            <div className="text-sm">
              <Link href={""} className="font-medium text-pink-600 hover:text-pink-500">
                Forgot your password?
              </Link>
            </div>
          </div>

          <Button style={redShadeStyle} variant="contained" startIcon={<HiMiniLockClosed />} type="submit">
            Sign in
          </Button>
        </Box>
      </div>
      <div className={`${styles.sideBarContainer}`}>
        <div className={` ${styles.sideBar}`}>
          <div className={styles.bgImage}></div>
          <div className={`text w-100 ${styles.sideBarContent}`}>
            <div className={`fw-bold   flex items-center justify-center ${styles.iconContainer}`}>
              <Link href={"/"} className="brand flex">
                {/* <MainLogo fontSize={"1.2em"} /> */}
                <Image src={"/logo.png"} alt="RMYLogo" width={100} height={100} />
              </Link>
            </div>
            <div className={styles.welcomeMessage}>
              <h3 className={`font-semibold text-2xl font-serif text-zinc-400 my-2`}>Welcome to Tranzift</h3>
              <p className={`font-sans text-xl my-1 font-semibold`}>Don`t have an account?</p>
              <Button variant="outlined" color="error" onClick={gotoSignUp}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const SignUpForm = ({ goToLogin }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [formData1, setFormData1] = useState({
    // userName: "",
    fName: "",
    lName: "",
    phone: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const [errors, setErrors] = useState({});
  // const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowCPassword = () => setShowCPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const validationSchema_ = Yup.object().shape({
    fName: Yup.string().required("First Name is required"),
    lName: Yup.string().required("Last Name is required"),
    // userName: Yup.string().required("Username is required"),
    phone: Yup.string()
      .required("Phone Number is required")
      .matches(/^[0-9]{10}$/, "Phone Number must be 10 digits"),
    email: Yup.string().required("Email is required").email("Invalid email format"),
    password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
    cPassword: Yup.string().required("Confirm Password is required"),
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData1((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    validateField(id, value); // Validate field on change
  };
  const validateField = async (id, value) => {
    try {
      await Yup.reach(validationSchema_, id).validate(value);
      setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
    } catch (validationError) {
      setErrors((prevErrors) => ({ ...prevErrors, [id]: validationError.message }));
    }
  };
  const isEmailAlreadyExists = async (email) => {
    if (email) {
      try {
        const baseUrl = "user/checkisemailunique";
        const isEmailExist = await apiHelper(baseUrl, {}, "POST", {
          email: email,
        });
        if (!isEmailExist.isUnique) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: "Email is already taken",
          }));
        } else {
          // Clear email error if it was previously set
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: "",
          }));
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const baseUrl = "authenticate/signup";
      const signup = await apiHelper(baseUrl, {}, "POST", {
        firstName: formData1?.fName,
        lastName: formData1?.lName,
        // userName: formData1?.userName,
        email: formData1?.email,
        password: formData1?.password,
        confirmPassword: formData1?.cPassword,
      });
      if (signup?.status === "success") {
        router.push("/");
      } else {
        alert("error");
      }
    } catch (error) {
      console.error("Error during signup:", error); // Log the full error for debugging
      if (error?.response?.data?.message) {
        // If there's a specific error message from the server, show it
        alert(error.response.data.message);
      } else {
        // Otherwise, show a generic error message
        alert("An error occurred during signup.");
      }
    }
  };

  return (
    <div className={`${styles.__container} ${styles.signUpContainer}`}>
      <div className={`${styles.formContainer}`}>
        <div className={`flex justify-center flex-col mx-auto ${styles.formHeader}`}>
          <h3 className="mt-1 text-center text-xl font-extrabold text-gray-700 font-serif">Sign Up To Tranzift</h3>
        </div>
        <Box
          className={styles.signUpForm}
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5em",
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="fName"
            label="First Name"
            multiline
            maxRows={4}
            value={formData1.fName}
            onChange={handleChange}
            error={!!errors.fName}
            helperText={errors.fName}
          />
          <TextField
            id="lName"
            label="Last Name"
            multiline
            maxRows={4}
            value={formData1.lName}
            onChange={handleChange}
            error={!!errors.lName}
            helperText={errors.lName}
          />

          <TextField
            id="phone"
            label="Phone Number"
            multiline
            maxRows={4}
            value={formData1.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
          />
          <TextField
            id="email"
            label="Email Address"
            multiline
            maxRows={4}
            value={formData1.email}
            onChange={handleChange}
            onBlur={() => isEmailAlreadyExists(formData1.email)}
            error={!!errors.email}
            helperText={errors.email}
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              value={formData1.password}
              error={!!errors.password}
              helperText={errors.password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="cPassword">Confirm Password</InputLabel>
            <OutlinedInput
              id="cPassword"
              type={showCPassword ? "text" : "password"}
              onChange={handleChange}
              value={formData1.cPassword}
              error={!!errors.cPassword}
              helperText={errors.cPassword}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowCPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showCPassword ? <MdVisibilityOff /> : <MdVisibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button style={redShadeStyle} variant="contained" startIcon={<HiMiniLockClosed />} type="submit">
            Sign Up
          </Button>
          <div></div>
        </Box>
      </div>
      <div className={`${styles.sideBarContainer}`}>
        <div className={` ${styles.sideBar}`}>
          <div className={styles.bgImage}>
            {/* <Image
                src={"/Assets/images/Background/diagmonds-light.png"}
                alt="RMYLoginSideImage"
                width={800}
                height={800}
              /> */}
          </div>
          <div className={`text w-100 ${styles.sideBarContent}`}>
            <div className={`fw-bold   flex items-center justify-center ${styles.iconContainer}`}>
              <Link href={"/"} className="brand flex">
                {/* <MainLogo fontSize={"1.2em"} /> */}
                <Image src={"/logo.png"} alt="RMYLogo" width={100} height={100} />
              </Link>
            </div>
            <div className={styles.welcomeMessage}>
              <h3 className={`font-semibold text-2xl font-serif text-zinc-400 my-2`}>Welcome to Tranzift</h3>
              <p className={`font-sans text-xl my-1 font-semibold`}>If You have an account?</p>
              <Button variant="outlined" color="error" onClick={goToLogin}>
                log In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const redShadeStyle = {
  backgroundColor: red[700],
  color: "white",
  "&:hover": {
    backgroundColor: red[700], // Adjust the shade of red for the hover effect
  },
};
const Index = () => {
  const [selectedOption, setSelectedOption] = useState("Login");
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (open) => {
    setOpenModal(open);
  };
  return (
    <>
      <div onClick={() => handleModal(true)} className={styles.registerBtn}>
        Register
      </div>
      <Modal
        open={openModal}
        onClose={() => handleModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.mainContainer}>
          <div className={`${styles.container}  rounded-lg overflow-hidden`}>
            <span className={styles.closeIcon} onClick={() => handleModal(false)}>
              <AiOutlineClose />
            </span>
            {selectedOption == "Login" ? (
              <LoginForm handleModal={handleModal} gotoSignUp={() => setSelectedOption("SignUP")} />
            ) : (
              <SignUpForm goToLogin={() => setSelectedOption("Login")} />
            )}
          </div>
          <div className={styles.__overlay} onClick={() => handleModal(false)}></div>
        </div>
      </Modal>
    </>
  );
};

export default Index;
