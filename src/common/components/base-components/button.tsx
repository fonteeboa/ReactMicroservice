import React from 'react'
import { IButton } from '../../types/base-components/button';
import { Button as ButtonAntd } from 'antd';

export const Button: React.FC<IButton> = ({ label, type, size, styles, onClick , className, ...props }) => {

    return (
        <>
            <ButtonAntd className={[className, styles].join(' ')} onClick={onClick} type={type} {...props}>
                {label}
            </ButtonAntd>
        </>

    )
}
