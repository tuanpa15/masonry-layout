import { NewUser, insertUser } from "@lib/handler/user";

async function main() {
  const newUser: NewUser = {
    email: "foo1@example.com",
    image: "some image url1",
    name: "foo1",
  };
  const res = await insertUser(newUser);
  console.log("insert user success", res);
  process.exit();
}

main();
