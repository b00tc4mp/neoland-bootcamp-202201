/* import {
  validateToken,
  validateName,
  validateSurname,
  validateEmail,
} from "../helpers";

function updateUser(surname, name, email) {
  validateToken(userToken);
  validateName(name);
  validateSurname(surname);
  validateEmail(email);

  return fetch(`https://b00tc4mp.herokuapp.com/api/v2/users`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify({ name, surname, email }),
  }).then((res) => {
    const { status } = res;

    if (status === 204) return;
    else if (status >= 400 && status < 500) {
      return res.json().then(({ error }) => {
        throw new Error(error);
      });
    } else if (status >= 500) throw new Error("server error");
    else throw new Error("unknown error");
  });
}

export default updateUser;
 */
