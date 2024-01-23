import { Box } from '@mui/material'
import classes from '../../style.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setStep } from '../../../action'

const FullButton = () => {
    const dispatch = useDispatch();
    const currentStep = useSelector((state) => state.componentReducer.step)
    const backHandler = () => {
        dispatch(setStep(currentStep - 1))
    }
    const nextHandler = () => {
        dispatch(setStep(currentStep + 1))
    }
    return (
        <>
            <Box className={classes['bottombar-container']}>
                <button onClick={backHandler} className={classes["back-button"]}>
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
        </>
    )
}

export default FullButton