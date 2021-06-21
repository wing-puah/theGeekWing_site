export interface AnimationState { loadText: false; }

export enum ACTIONS { endCameraPan = 'END_CAMERA_PAN' };

export interface ActionItem {
    type: ACTIONS;
    payload?: any;
}

const triggerLocationText = (): ActionItem => {
    return { type: ACTIONS.endCameraPan, };
};

export { triggerLocationText };