import React, { ComponentType, ReactElement } from 'react';
import { IconTree } from '@ui/icons/create-svg-icon';
import { IconSize } from '@ui/icons/svg-icon';
interface MixedIconProps {
    icon: ReactElement<{
        className: string;
    }> | IconTree[] | string | ComponentType;
    className?: string;
    size?: IconSize;
}
declare function _MixedIcon({ icon, className, size }: MixedIconProps): import("react/jsx-runtime").JSX.Element;
export declare const MixedIcon: React.MemoExoticComponent<typeof _MixedIcon>;
export {};
