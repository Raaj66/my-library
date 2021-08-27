
import React from 'react';
import { Link } from 'react-router-dom';
import { IcnLinkProps } from './IcnLink.types';
import classNames from 'classnames';
import styles from './IcnLink.scss';
/**
 *  IcnLink Component
 * @param props 
 * @returns 
 */
const IcnLink: React.FC<IcnLinkProps & Record<string, any>> = (props) => {
    const { href, children, cssClassName, isReactAppUrl,onClick,...rest } = props;
    return (
        <>
            {isReactAppUrl
                ?
                <Link to={href} className={classNames(cssClassName, styles.IcnLink)} {...rest} onClick={onClick}>
                    {children}
                </Link>
                : <a
                    href={href} onClick={onClick}
                    className={classNames(cssClassName, styles.IcnLink)}
                    {...rest}>
                    {children}
                </a>
            }
        </>
    )

};

export default IcnLink;

