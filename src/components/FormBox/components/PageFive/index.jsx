import { Box, Stack } from "@mui/material"
import classes from '../../style.module.scss'

import ThankYouImg from '../../../../assets/icon-thank-you.svg'

const PageFive = () => {
    return (
        <>
            <Box className={classes["formbox-container"]}>
                <Box className={classes["formbox-wrapper"]}>
                    <Box className={classes["thankyou-container"]}>
                        <Stack direction={"row"} justifyContent={"center"}>
                            <img src={ThankYouImg} alt="" width={50} height={50} />
                        </Stack>
                        <h3>Thank you!</h3>
                        <h4>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</h4>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default PageFive