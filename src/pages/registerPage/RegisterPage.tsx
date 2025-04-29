import { Button, Container, Input, InputLabel } from "@mui/material";

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function RegisterPage() {
  return (
    <Container sx={styles}>
      <form>
        <InputLabel htmlFor="name-input">Name</InputLabel>
        <Input type="text" id="name-input" /> <br />
        <InputLabel htmlFor="last-name-input">Last Name</InputLabel>
        <Input type="text" id="last-name-input" /> <br />
        <InputLabel htmlFor="email-input">Email</InputLabel>
        <Input type="email" id="email-input" /> <br />
        <InputLabel htmlFor="password-input">Password</InputLabel>
        <Input type="password" id="password-input" /> <br />
        <InputLabel htmlFor="phone-input">Phone</InputLabel>
        <Input type="password" id="phone-input" /> <br />
        <InputLabel htmlFor="address-input">Address</InputLabel>
        <Input type="password" id="Address-input" /> <br />
        <InputLabel htmlFor="post-code-input">postCode</InputLabel>
        <Input type="password" id="post-code-input" /> <br />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Container>
  );
}
