import * as React from "react";

export interface SpatialNavigationConfig {
    activeClassName: string;
    focusableClassName: string;
    selector: string;
}

export default class SpatialNavigation extends React.Component<any, any> {
    new (props: any, context?: any)
}

export interface FocusableProps {
    active?: boolean;
    onFocus?: Function;
    className?: string;
    onUnfocus?: Function;
    onClickEnter?: Function;
    onWillUnfocus?: Function;
    onWillFocus?: Function;
}

export class Focusable extends React.Component<any, any> {
    new (props: FocusableProps)
}

export interface FocusableSectionProps {
    sectionId?: string;
    defaultElement?: any;
    enterTo: EnterTo;
}

export class FocusableSection extends React.Component<any, any> {
    new (props: FocusableSectionProps)
}

export enum EnterTo {
    lastFocused = 'last-focused',
    default = 'default-element'
}

