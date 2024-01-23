import { Box } from '@mui/material'
import classes from '../../style.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setStep } from '../../../action'

const NextButtonOnly = () => {
    const dispatch = useDispatch();
    const currentStep = useSelector((state) => state.componentReducer.step)
    const nextHandler = () => {
        dispatch(setStep(currentStep + 1))
    }
    return (
        <>
            <Box className={classes['bottombar-container-next-only']}>
                <button onClick={nextHandler} className={classes["next-button"]}>
                    Next Step
                </button>
            </Box>
        </>
    )
}

export default NextButtonOnly