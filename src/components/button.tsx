type ButtonProps = {
    text: string,
    onClick: () => void
}

function Button({ onClick, text }: ButtonProps) {
    return <button className="bg-primary hover:bg-secondary px-[20px] py-[10px] rounded-[4px] h-[40px] w-[340px] outline-none" onClick={onClick}>{text}</button>;
}

export default Button;