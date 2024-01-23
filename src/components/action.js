import {
    SET_STEP, SET_ORDER
} from './constant';

export const setStep = (step) => ({
    type: SET_STEP,
    step
})

export const setOrder = (order) => ({
    type: SET_ORDER,
    order
})