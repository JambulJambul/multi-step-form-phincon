import classes from './style.module.scss'
import Sidebar from '../../components/Sidebar';
import FormBox from '../../components/FormBox';
import { Box } from '@mui/material';

const Homepage = () => {
    return (
        <>
            <Box className={classes["main-container"]}>
                <Box className={classes['homepage-container']}>
                    <Box className={classes['sidebar-wrapper']}>
                        <Sidebar />
                    </Box>
                    <Box className={classes['content-container']}>
                        <Box className={classes['content-wrapper']}>
                            <Box className={classes["formbox-container"]}>
                                <FormBox />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Homepage;