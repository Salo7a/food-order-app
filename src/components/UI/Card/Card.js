import classes from "./Card.module.css"

export const Card = ({children, className}) => {
    return (
        <>
            <div className={`${classes.card} ${className}`}>
                {children}
            </div>
        </>
    )
}