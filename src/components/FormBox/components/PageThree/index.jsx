import { Box } from "@mui/material"
import classes from "../../style.module.scss"

import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { setOrder } from "../../../action"
import { setStep } from "../../../action"

const PageThree = () => {
    const dispatch = useDispatch();
    const currentStep = useSelector((state) => state.componentReducer.step)
    const currentOrder = useSelector((state) => state.componentReducer.order)
    const [addOns, setAddOns] = useState([]);
    const backHandler = () => {
        dispatch(setStep(currentStep - 1))
    }
    const onSubmit = () => {
        dispatch(setOrder({
            ...currentOrder, addOns
        }))
    }
    const nextHandler = () => {
        onSubmit()
        dispatch(setStep(currentStep + 1))
    }

    const addOnOne = (e) => {
        const isChecked = e.target.checked;
        const addOn = {
            addOn: "Online Service",
            addOnPrice: 1
        };
        if (isChecked) {
            setAddOns((prevAddOns) => [...prevAddOns, addOn]);
        } else {
            setAddOns((prevAddOns) => prevAddOns.filter((item) => item.addOn !== addOn.addOn));
        }
    };

    const addOnTwo = (e) => {
        const isChecked = e.target.checked;
        const addOn = {
            addOn: "Larger Storage",
            addOnPrice: 2
        };
        if (isChecked) {
            setAddOns((prevAddOns) => [...prevAddOns, addOn]);
        } else {
            setAddOns((prevAddOns) => prevAddOns.filter((item) => item.addOn !== addOn.addOn));
        }
    };

    const addOnThree = (e) => {
        const isChecked = e.target.checked;
        const addOn = {
            addOn: "Customizable profile",
            addOnPrice: 2
        };
        if (isChecked) {
            setAddOns((prevAddOns) => [...prevAddOns, addOn]);
        } else {
            setAddOns((prevAddOns) => prevAddOns.filter((item) => item.addOn !== addOn.addOn));
        }
    };

    return (
        <>
            <Box className={classes["formbox-container"]}>
                <Box className={classes["formbox-wrapper"]}>
                    <h1>Pick add-ons</h1>
                    <h2>Add-ons help enhance your gaming experience</h2>
                    <Box className={classes["addon-wrapper"]}>
                        <Box className={classes["row-wrapper"]}>
                            <label>
                                <Box className={classes["row-content"]}>
                                    <Box className={classes["checkbox-box"]}>
                                        <input type="checkbox" name="online" id="online" onChange={(e) => addOnOne(e)} />
                                        <Box className={classes["row-info"]}>
                                            <h3>
                                                Online Service
                                            </h3>
                                            <h4>
                                                Access to multiplayer games
                                            </h4>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <h4 className={classes["row-price"]}>+$1/mo</h4>
                                    </Box>
                                </Box>
                            </label>
                        </Box>
                        <Box className={classes["row-wrapper"]}>
                            <label>
                                <Box className={classes["row-content"]}>
                                    <Box className={classes["checkbox-box"]}>
                                        <input type="checkbox" name="larger" id="larger" onChange={(e) => addOnTwo(e)} />
                                        <Box className={classes["row-info"]}>
                                            <h3>
                                                Larger storage
                                            </h3>
                                            <h4>
                                                Extra 1TB of cloud save
                                            </h4>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <h4 className={classes["row-price"]}>+$1/mo</h4>
                                    </Box>
                                </Box>
                            </label>
                        </Box>
                        <Box className={classes["row-wrapper"]}>
                            <label>
                                <Box className={classes["row-content"]}>
                                    <Box className={classes["checkbox-box"]}>
                                        <input type="checkbox" name="custom" id="custom" onChange={(e) => addOnThree(e)} />
                                        <Box className={classes["row-info"]}>
                                            <h3>
                                                Customizable profile
                                            </h3>
                                            <h4>
                                                Custom theme on your profile
                                            </h4>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <h4 className={classes["row-price"]}>+$1/mo</h4>
                                    </Box>
                                </Box>
                            </label>
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

export default PageThree