import type React from "react"

type ButtonProps = {
    classname: string
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = (props: ButtonProps) => {
    return (
        <button className={props.classname} onClick={props.handleClick}>Primary</button>
    )
}