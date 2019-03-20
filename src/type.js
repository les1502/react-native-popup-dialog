// @flow

export type PopupDialogType = {
  dialogTitle?: any;
  children: any;
}

export type DialogType = {
  width?: number;
  height?: number;
  hasOverlay: boolean;
  overlayPointerEvents?: string;
  overlayBackgroundColor?: string;
  overlayOpacity?: number;
  dialogAnimation?: Object;
  dialogStyle?: any;
  containerStyle?: any;
  animationDuration?: number;
  dismissOnTouchOutside?: boolean;
  dismissOnHardwareBackPress?: boolean;
  show?: boolean;
  onShown?: Function;
  onDismissed?: Function;
  actions?: Array<any>;
  useNativeDriver?: boolean;
  children: any;
}

export type DialogButtonType = {
  text: string;
  onPress: Function;
  align?: string;
  buttonStyle?: any;
  textStyle?: any;
  textContainerStyle?: any;
  disabled?: boolean;
  activeOpacity?: number;
}

export type DialogTitleType = {
  title: any;
  titleStyle?: any;
  titleTextStyle?: any;
  titleAlign?: string;
  hasTitleBar?: boolean;
}

export type OverlayType = {
  onPress: Function;
  backgroundColor?: string;
  opacity?: number;
  animationDuration?: number;
  showOverlay?: boolean;
  pointerEvents?: string;
  useNativeDriver?: boolean;
}
