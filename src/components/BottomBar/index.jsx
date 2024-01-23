import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import NextButtonOnly from './components/NextButtonOnly'
import FullButton from './components/FullButton'

import classes from './style.module.scss'

const BottomBar = () => {

    const currentStep = useSelector((state) => state.componentReducer.step)
    const renderComponent = () => {
        switch (currentStep) {
            case 1:
                return <NextButtonOnly />
            case 5:
                return <Box />
            default:
                return <FullButton />
        }
    }
    return (
        <>
                {renderComponent()}
        </>
    )
}

export default BottomBar