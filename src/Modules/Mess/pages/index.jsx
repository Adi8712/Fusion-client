import { useSelector } from "react-redux";
import { Loader } from "@mantine/core";
import Caretaker from "../components/Caretaker_Index";
import Warden from "../components/Warden_Index";
import Student from "../components/Student_Index";

function MessPage() {
  const role = useSelector((state) => state.user.role);
  console.log(role);
  switch (role) {
    case "mess_manager":
      return <Caretaker />;
    case "student":
      return <Student />;
    case "mess_warden":
      return <Warden />;
    default:
      return <Loader />;
  }
}

export default MessPage;
