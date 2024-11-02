const Spinner = () => {
    return (
        <div
            style={{
                margin: "3.2rem auto 1.6rem",
                width: "60px",
                aspectRatio: "1",
                borderRadius: "50%",
                border: "8px solid #1B2631",
                borderRightColor: "#B7C7D7",
                animation: "rotate 1s infinite linear",
            }}
        ></div>
    );
};

export default Spinner;
