import type { Dispatch, SetStateAction } from 'react';

export type CameraTarget = 'start' | 'about' | 'law' | 'tech' | 'music';

export interface MinimapState {
  target: CameraTarget;
  triggered: boolean;
  autoPilot: boolean;
}

export type MinimapStateSetter = Dispatch<SetStateAction<MinimapState>>;

export const INITIAL_MINIMAP_STATE: MinimapState = {
  target: 'start',
  triggered: false,
  autoPilot: true,
};

export const triggerMinimapTarget = (
  setState: MinimapStateSetter,
  target: CameraTarget,
  autoPilot: boolean,
) => {
  setState((state) => ({
    ...state,
    target,
    autoPilot,
    triggered: true,
  }));
};
