const Button = ({ label, onClick }:any) => {
    return (
        <button>
            {onClick}
            {label}
        </button>
    );
};

export default Button;
