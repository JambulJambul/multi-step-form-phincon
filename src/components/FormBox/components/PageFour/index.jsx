import { Box, Stack } from '@mui/material'
import classes from '../../style.module.scss'

import { useDispatch, useSelector } from "react-redux"

import { setStep } from "../../../action"
import { useEffect } from 'react'

const PageFour = () => {
    const dispatch = useDispatch();
    const currentStep = useSelector((state) => state.componentReducer.step)
    const currentOrder = useSelector((state) => state.componentReducer.order)
    console.log(currentOrder)
    const calcTotal = () => {
        const catPrice = currentOrder.planPrice
        const arrayPrice = currentOrder.addOns?.map((item) => {
            return item.addOnPrice
        })
        const totalArrayPrice = arrayPrice.reduce((acc, cv) => acc+cv,0)
        return catPrice + totalArrayPrice
    }

    const backHandler = () => {
        dispatch(setStep(currentStep - 1))
    }
    const nextHandler = () => {
        dispatch(setStep(currentStep + 1))
    }
    const changeHandler = () => {
        dispatch(setStep(currentStep - 2))
    }
    return (
        <>
            <Box className={classes["formbox-container"]}>
                <Box className={classes["formbox-wrapper"]}>
                    <h1>Finishing up</h1>
                    <h2>Double-check everything looks OK before confirming.</h2>
                    <Box className={classes["finish-container"]}>
                        <Stack direction={"row"} justifyContent={'space-between'} alignItems={'center'}>
                            <Box>
                                <h3>{currentOrder.planType} ({currentOrder.duration})</h3>
                                <button className={classes["change-button"]} onClick={changeHandler}>
                                    Change
                                </button>
                            </Box>
                            <Box>
                                <h3>${currentOrder.planPrice}/mo</h3>
                            </Box>
                        </Stack>
                        <hr />
                        {currentOrder.addOns.map((item) => (
                            <>
                                <Stack direction={"row"} justifyContent={'space-between'}>
                                    <h4>
                                        {item.addOn}
                                    </h4>
                                    <h4>
                                        +${item.addOnPrice}/mo
                                    </h4>
                                </Stack>
                            </>
                        ))}
                    </Box>
                    <Box className={classes["total"]}>
                        <Stack direction={"row"} justifyContent={'space-between'}>
                            <h4>
                                Total (per month)
                            </h4>
                            <h3>
                                +${calcTotal()}/mo
                            </h3>
                        </Stack>
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

export default PageFour