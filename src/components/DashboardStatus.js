import { Container, Image } from "react-bootstrap";
function DashboardStatus() {
  return (
    <Container className="d-flex flex-row flex-sm-row mb-4 h-1527 w-95">
      <div className="flex-fill justify-content-start align-self-center">
        <h5
          style={{
            color: "#8990AD",
            fontSize: 19,
            letterSpacing: 2.91,
            textAlign: "left",
          }}
        >
          BALANCE
        </h5>
        <p>$5900.00</p>
      </div>
      <div className="flex-fill justify-content-center align-self-center">
        <h5
          style={{
            color: "#8990AD",
            fontSize: 19,
            letterSpacing: 2.91,
            textAlign: "left",
          }}
        >
          PROFITS
        </h5>
        <p>$590.00</p>
      </div>
      <div className="flex-fill justify-content-center align-self-center">
        <h5
          style={{
            color: "#8990AD",
            fontSize: 19,
            letterSpacing: 2.91,
            textAlign: "left",
          }}
        >
          LOSSES
        </h5>
        <p>$450.00</p>
      </div>
      <div className="flex-fill justify-content-end  align-self-center">
        <h5
          style={{
            color: "#8990AD",
            fontSize: 19,
            letterSpacing: 2.91,
            textAlign: "left",
          }}
        >
          CURRENCIES
        </h5>
        <Image src="../../../img/bitcoin-2.png" alt="bitcoin" height="21" width="14" />
        <Image src="../../../img/currency-dollar.png" alt="dollar" height="33" width="33" />
        <Image src="../../../img/currency-euro.png" alt="euro" height="21" width="19" />
        <Image src="../../../img/currency-yen.png" alt="yen" height="33" width="34" />
      </div>
    </Container>
  );
}

export default DashboardStatus;
