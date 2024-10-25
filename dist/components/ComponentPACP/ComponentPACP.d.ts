import { MouseEventHandler } from 'react';
export interface ComponentPACPProps {
    text: string;
    txtcolor: string;
    bgcolor: string;
    size?: "small" | "medium" | "large";
    hoverTxtcolor?: string;
    hoverBgcolor?: string;
    bordercolor?: string;
    borderwidth?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare function ComponentPACP(props: ComponentPACPProps): import("react/jsx-runtime").JSX.Element;
export default ComponentPACP;
