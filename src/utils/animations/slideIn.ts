export const slideIn = {
  visible: (custom: any) => ({
    opacity: [0, 0.25, 0.5, 1],
    y: [16, 8, 4, 0],
  }),
  outOfView: (custom: any) => ({
    opacity: 0,
  }),
};

export enum SlideInState {
  VISIBLE = 'visible',
  OUTOFVIEW = 'outOfView'
}