import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'
import PageFour from './components/PageFour'
import PageFive from './components/PageFive'
import classes from './style.module.scss'

const FormBox = () => {
    const currentStep = useSelector((state) => state.componentReducer.step);
    const renderComponent = () => {
        switch (currentStep) {
            case 1:
                return <PageOne />
            case 2:
                return <PageTwo />
            case 3:
                return <PageThree />
            case 4:
                return <PageFour />
            case 5:
                return <PageFive />
            default:
                return <PageOne />
        }
    }

    return (
        <>
            {renderComponent()}
        </>
    )
}

export default FormBox