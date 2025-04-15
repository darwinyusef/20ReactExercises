import { User } from "./api";

export function handleFormSubmit(event: Event) {
  event.preventDefault();

  const nameInput = (document.getElementById("name") as HTMLInputElement).value;
  const emailInput = (document.getElementById("email") as HTMLInputElement).value;

  const newUser: User = {
    id: Date.now(),
    name: nameInput,
    email: emailInput,
  };

  console.log("Nuevo usuario:", newUser);
  addUserToList(newUser);

  (document.getElementById("dataForm") as HTMLFormElement).reset();
}

function addUserToList(user: User): void {
  const dataList = document.querySelector("ul");
  if (!dataList) return;

  const listItem = document.createElement("li");
  listItem.textContent = `${user.name} - ${user.email}`;
  dataList.appendChild(listItem);
}