/// <reference types="react" />
interface ButtonProps {
    className?: string;
    label: string;
}
declare const Button: ({ className, label }: ButtonProps) => JSX.Element;
interface LinkProps {
    className?: string;
    href: string;
    label: string;
}
declare const Link: ({ className, href, label }: LinkProps) => JSX.Element;
export { Button, Link };
