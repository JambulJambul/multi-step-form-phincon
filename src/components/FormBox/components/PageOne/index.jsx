import { Box } from "@mui/material"
import classes from "../../style.module.scss"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { setOrder } from "../../../action"
import { setStep } from "../../../action"

const PageOne = () => {
    const dispatch = useDispatch();
    const currentStep = useSelector((state) => state.componentReducer.step)
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const onSubmit = () => {
        dispatch(setOrder({
            username, email, phoneNumber
        }))
    }
    
    const backHandler = () => {
        dispatch(setStep(currentStep - 1))
    }
    const nextHandler = () => {
        try {
            onSubmit();
            dispatch(setStep(currentStep + 1));
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Box className={classes["formbox-container"]}>
                <Box className={classes["formbox-wrapper"]}>
                    <h1>Personal Info</h1>
                    <h2>Please provide your name, email address, and phone number.</h2>
                    <Box className={classes["content-wrapper"]}>
                        <Box className={classes["input-box"]}>
                            <label htmlFor="username">
                                Name
                            </label>
                            <input onChange={(e) => setUsername(e.target.value)} placeholder='e.g Stephen King' type="text" name="username" id="username" />
                        </Box>
                        <Box className={classes["input-box"]}>
                            <label htmlFor="email">
                                Email Address
                            </label>
                            <input onChange={(e) => setEmail(e.target.value)} placeholder='e.g stephenking@lorem.com' type='email' name="email" id="email" />
                        </Box>
                        <Box className={classes["input-box"]}>
                            <label htmlFor="phone">
                                Phone Number
                            </label>
                            <input onChange={(e) => setPhoneNumber(e.target.value)} placeholder='e.g +1 234 567 890' type="text" name="phoneNumber" id="phoneNumber" />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={currentStep == 5 ? classes["display-none"] : (<></>)}>
                <Box className={currentStep != 1 ? classes["bottombar"] : classes["bottombar-end"]}>
                    <button onClick={backHandler} className={currentStep != 1 ? classes["back-button"] : classes["display-none"]}>
                        Go Back
                    </button>
                    <button onClick={nextHandler} className={classes["next-button"]}>
                        {currentStep == 4 ? (
                            <>
                                Confirm
                            </>
                        ) : (
                            <>
                                Next Step
                            </>
                        )}
                    </button>
                </Box>
            </Box>
        </>
    )
}

export default PageOne