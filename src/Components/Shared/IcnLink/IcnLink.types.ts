/**
 * IcnLinkProp
 */
export interface IcnLinkProps {
    /** URL for the link */
    href: string;
    /** Aditional css class name for the link */
    cssClassName?: string;
    /** is this internal URL */
    isReactAppUrl?: boolean,
    /** Event handler */
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
