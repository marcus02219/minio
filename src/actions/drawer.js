/* @flow */

'use strict';
import type {Action} from './types';

export const OPEN_DRAWER = "OPEN_DRAWER";
export const CLOSE_DRAWER = "CLOSE_DRAWER";
export const ENABLE_DRAWER = "ENABLE_DRAWER";
export const DISABLE_DRAWER = "DISABLE_DRAWER";

export function openDrawer():Action {
    return {
        type: OPEN_DRAWER
    }
}

export function closeDrawer():Action {
    return {
        type: CLOSE_DRAWER
    }
}

export function enableDrawer():Action {
    return {
        type: ENABLE_DRAWER
    }
}

export function disableDrawer():Action {
    return {
        type: DISABLE_DRAWER
    }
}
