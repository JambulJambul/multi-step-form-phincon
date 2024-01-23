import classes from './style.module.scss'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const currentStep = useSelector((state) => state.componentReducer.step);
    return (
        <>
            <Box className={classes["sidebar-wrapper"]}>
                <Box className={classes["sidebar-content"]}>
                    <Box className={classes["number-row"]}>
                        <Box className={currentStep == 1 ? classes["selected-number"] : classes["sidebar-numbers"]}>
                            1
                        </Box>
                        <Box className={classes["number-info"]}>
                            <h5>Step 1</h5>
                            <h4>YOUR INFO</h4>
                        </Box>
                    </Box>
                    <Box className={classes["number-row"]}>
                        <Box className={currentStep == 2 ? classes["selected-number"] : classes["sidebar-numbers"]}>
                            2
                        </Box>
                        <Box className={classes["number-info"]}>
                            <h5>Step 2</h5>
                            <h4>SELECT PLAN</h4>
                        </Box>
                    </Box>
                    <Box className={classes["number-row"]}>
                        <Box className={currentStep == 3 ? classes["selected-number"] : classes["sidebar-numbers"]}>
                            3
                        </Box>
                        <Box className={classes["number-info"]}>
                            <h5>Step 3</h5>
                            <h4>ADD-ONS</h4>
                        </Box>
                    </Box>
                    <Box className={classes["number-row"]}>
                        <Box className={currentStep == 4 ? classes["selected-number"] : classes["sidebar-numbers"]}>
                            4
                        </Box>
                        <Box className={classes["number-info"]}>
                            <h5>Step 4</h5>
                            <h4>SUMMARY</h4>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Sidebar