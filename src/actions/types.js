/* @flow */

'use strict';

import type {Tab} from '../AppNavigator';

export type Action =
    { type: 'OPEN_DRAWER'}
    | { type: 'CLOSE_DRAWER'}
    | { type: 'ENABLE_DRAWER'}
    | { type: 'DISABLE_DRAWER'}

export type Dispatch = (action:Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch:Dispatch, getState:GetState) => any;
export type PromiseAction = Promise<Action>;
