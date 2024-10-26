import { Table, Button, Container, Center } from "@mantine/core";

function ViewBillsAndPayment() {
  return (
    <Container
      style={{
        paddingTop: "20px",
        paddingBottom: "20px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Table
        style={{
          width: "80%",
          margin: "0 auto",
          backgroundColor: "white",
          transition: "box-shadow 0.3s ease", // Smooth transition for shadow
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
        }}
        withBorder
        withColumnBorders
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow = "0px 0px 15px rgba(0, 0, 0, 0.3)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.boxShadow = "0px 0px 5px rgba(0, 0, 0, 0.1)")
        }
      >
        <thead>
          <tr>
            <th>Month</th>
            <th>Monthly Bill</th>
            <th>Rebate Count</th>
            <th>Rebate Amount</th>
            <th>Total</th>
            <th>Paid</th>
            <th>Due Amount</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              month: "Feb-2024",
              monthlyBill: "15000",
              rebateCount: "0",
              rebateAmount: "0",
              total: "15000",
              paid: "X",
              dueAmount: "15000",
            },
            {
              month: "Jan-2023",
              monthlyBill: "15000",
              rebateCount: "0",
              rebateAmount: "0",
              total: "15000",
              paid: "X",
              dueAmount: "15000",
            },
            {
              month: "Nov-2023",
              monthlyBill: "15000",
              rebateCount: "0",
              rebateAmount: "0",
              total: "15000",
              paid: "X",
              dueAmount: "15000",
            },
          ].map((row, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ccc" }}>{row.month}</td>
              <td style={{ border: "1px solid #ccc" }}>{row.monthlyBill}</td>
              <td style={{ border: "1px solid #ccc" }}>{row.rebateCount}</td>
              <td style={{ border: "1px solid #ccc" }}>{row.rebateAmount}</td>
              <td style={{ border: "1px solid #ccc" }}>{row.total}</td>
              <td style={{ border: "1px solid #ccc" }}>{row.paid}</td>
              <td style={{ border: "1px solid #ccc" }}>{row.dueAmount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Center style={{ marginTop: "20px" }}>
        <Button
          style={{
            width: "200px",
            fontSize: "18px",
            backgroundColor: "#1e90ff",
            color: "white",
            transition: "background-color 0.3s ease", // Smooth transition for color change
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#1c86ee")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#1e90ff")
          }
        >
          Submit
        </Button>
      </Center>
    </Container>
  );
}

export default ViewBillsAndPayment;
