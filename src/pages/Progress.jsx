const ProgressBar = ({ step, totalSteps }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
    >
      {Array.from({ length: totalSteps }, (_, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              backgroundColor: index + 1 === step ? "#373176" : "#ECECEC33",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            {index + 1}
          </div>
          {index < totalSteps - 1 && (
            <div
              style={{ width: 130, height: 2, backgroundColor: "white" }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
