import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "config/firebase";
import { type User } from "~/app/Schema/userSchema";

export const createUser = async (user: User) => {
  try {
    await createUserWithEmailAndPassword(auth, user.email, user.password);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error registering user: ", error.message);
      alert(error.message);
    } else {
      console.error("Unknown error registering user: ", error);
      alert("An unknown error occurred");
    }
  }
};
