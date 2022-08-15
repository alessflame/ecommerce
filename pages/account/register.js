import React from "react";
import { Input, Button } from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormAlert from "../../components/FormAlert/FormAlert";
import { onOpen } from "../../redux/slices/modalSlice";
import { useDispatch } from "react-redux";

function register() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  const postRegister = async (data) => {
    const res = await fetch(`/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    return res.json();
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      confirm: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Il campo nome è richiesto"),
      surname: Yup.string().required("Il campo cognome è richiesto"),
      username: Yup.string()
        .required("Il campo Username è richiesto")
        .min(6, "minimo 5 lettere per lo username"),
      email: Yup.string()
        .required("Il campo Username è richiesto")
        .email("Inserisci una email valida"),
      password: Yup.string()
        .required("Il campo Password è richiesto")
        .min(4, "minimo 6 caratteri per la password"),
      confirm: Yup.string().required("Il campo conferma è richiesto"),
    }),
    onSubmit: async (values, onSubmitProps) => {
      if (values.password === values.confirm) {
        const res = await postRegister(JSON.stringify(values));

        dispatch(onOpen({ ...res }));

        onSubmitProps.resetForm();
      } else {
        alert("le pass non coincidono");
      }
    },
  });
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {formik.errors.name ? <FormAlert message={formik.errors.name} /> : ""}
      {formik.errors.surname ? (
        <FormAlert message={formik.errors.surname} />
      ) : (
        ""
      )}

      {formik.errors.username ? (
        <FormAlert message={formik.errors.username} />
      ) : (
        ""
      )}
      {formik.errors.email ? <FormAlert message={formik.errors.email} /> : ""}

      {formik.errors.password ? (
        <FormAlert message={formik.errors.password} />
      ) : (
        ""
      )}
      {formik.errors.confirm ? (
        <FormAlert message={formik.errors.confirm} />
      ) : (
        ""
      )}

      <form
        onSubmit={formik.handleSubmit}
        style={{
          maxWidth: "300px",
          width: "80%",
          padding: "80px 10px",
          margin: "30px 0",
        }}
      >
        <label htmlFor="name">Nome</label>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="surname">Cognome</label>
        <Input
          id="surname"
          name="surname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.surname}
        />
        <label htmlFor="username">Username</label>
        <Input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="password">Password</label>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <label htmlFor="confirm">Confirm Password</label>
        <Input
          id="confirm"
          name="confirm"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirm}
        />

        <Button type="submit">Registrati</Button>
      </form>
    </div>
  );
}

export default register;
