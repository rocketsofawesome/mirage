import React from 'react'
import Responsive from 'react-responsive'
import { sizes } from 'SRC/core/theme/breakpoints'

export const Desktop = props => <Responsive {...props} minDeviceWidth={sizes.desktop} />;
export const Tablet = props => <Responsive {...props} minDeviceWidth={sizes.tablet} maxDeviceWidth={sizes.desktop} />;
export const Mobile = props => <Responsive {...props} maxDeviceWidth={sizes.tablet - 1} />;
export const Default = props => <Responsive {...props} minDeviceWidth={sizes.tablet} />;
