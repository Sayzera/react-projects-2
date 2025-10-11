export const Card = (props) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        width: "250px",
        cursor: "pointer",
      }}
      onClick={() => {}}
    >
      {props.imageUrl && (
        <img
          src={props.imageUrl}
          alt={props.alt || " | Health Toursmin"}
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />
      )}

      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};
