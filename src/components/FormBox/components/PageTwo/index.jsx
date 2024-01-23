import { Box } from "@mui/material"
import classes from "../../style.module.scss"
import ArcadeImage from "../../../../assets/icon-arcade.svg"
import AdvancedImage from "../../../../assets/icon-advanced.svg"
import ProImage from "../../../../assets/icon-pro.svg"

import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setOrder } from "../../../action"
import { setStep } from "../../../action"

const PageTwo = () => {
    const dispatch = useDispatch();
    const currentStep = useSelector((state) => state.componentReducer.step)
    const currentOrder = useSelector((state) => state.componentReducer.order)
    const backHandler = () => {
        dispatch(setStep(currentStep - 1))
    }
    const [planType, setPlanType] = useState("");
    const [planPrice, setPlanPrice] = useState(0);
    const [chosenPackage, setChosenPackage] = useState();
    const [duration, setDuration] = useState("Monthly");

    const clearState = () => {
        setPlanType("");
        setPlanPrice(0)
        setChosenPackage()
    }

    const arcadeMonthly = () => {
        clearState()
        setChosenPackage(1)
        setPlanPrice(9)
        setPlanType("Arcade")
    }

    const advancedMonthly = () => {
        clearState()
        setChosenPackage(2)
        setPlanPrice(12)
        setPlanType("Advanced")
    }

    const proMonthly = () => {
        clearState()
        setChosenPackage(3)
        setPlanPrice(15)
        setPlanType("Pro")
    }

    const arcadeYearly = () => {
        clearState()
        setChosenPackage(1)
        setPlanPrice(90)
        setPlanType("Arcade")
    }

    const advancedYearly = () => {
        clearState()
        setChosenPackage(2)
        setPlanPrice(120)
        setPlanType("Advanced")
    }

    const proYearly = () => {
        clearState()
        setChosenPackage(3)
        setPlanPrice(150)
        setPlanType("Pro")
    }

    const onSubmit = () => {
        dispatch(setOrder({
            ...currentOrder, planType, planPrice, duration
        }))
    }
    const nextHandler = () => {
        onSubmit()
        dispatch(setStep(currentStep + 1))
    }

    return (
        <>
            <Box className={classes["formbox-container"]}>
                <Box className={classes["formbox-wrapper"]}>
                    <h1>Select your plan</h1>
                    <h2>You have the option of monthly or yearly billing.</h2>
                    <Box className={classes["plan-wrapper"]}>
                        <Box className={classes["plan-rows"]}>
                            <button onClick={arcadeMonthly} className={chosenPackage == 1 ? classes["plan-item-selected"] : classes["plan-item"]}>
                                <Box className={classes["inside-button"]}>
                                    <img src={ArcadeImage} alt="" width="50" height="50" />
                                    <Box className={classes["button-info"]}>
                                        <h3>Arcade</h3>
                                        <h4>$9/mo</h4>
                                    </Box>
                                </Box>
                            </button>
                            <button onClick={advancedMonthly} className={chosenPackage == 2 ? classes["plan-item-selected"] : classes["plan-item"]}>
                                <Box className={classes["inside-button"]}>
                                    <img src={AdvancedImage} alt="" width="50" height="50" />
                                    <Box className={classes["button-info"]}>
                                        <h3>Advanced</h3>
                                        <h4>$12/mo</h4>
                                    </Box>
                                </Box>
                            </button>
                            <button onClick={proMonthly} className={chosenPackage == 3 ? classes["plan-item-selected"] : classes["plan-item"]}>
                                <Box className={classes["inside-button"]}>
                                    <img src={ProImage} alt="" width="50" height="50" />
                                    <Box className={classes["button-info"]}>
                                        <h3>Pro</h3>
                                        <h4>$15/mo</h4>
                                    </Box>
                                </Box>
                            </button>
                        </Box>
                        <Box className={classes["plantype-wrapper"]}>
                            <h3>Monthly</h3>
                            <Box className={classes["switch-box"]}>
                                <label className={classes["switch"]}>
                                    <input type="checkbox" />
                                    <span className={classes["slider"]}></span>
                                </label>
                            </Box>
                            <h3>Yearly</h3>
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

export default PageTwo