import React, { useEffect, useState } from "react";
import { Input, Button, Alert } from "@chakra-ui/react";

import Link from "next/link";
import { useRouter } from "next/router";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormAlert from "../../components/FormAlert/FormAlert";
import { useDispatch, useSelector } from "react-redux";
import { onOpen } from "../../redux/slices/modalSlice";
import { login } from "../../redux/slices/authSlice";

function pageLogin() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { auth } = useSelector((state) => state);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [item, setItem] = useState();

  

  const postLogin = async (data, username) => {
    console.log(process.env.NEXT_PUBLIC_URL_DEPLOY, "ok");
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL_DEPLOY}/api/users/${username}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    return res.json();
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setItem(localStorage.getItem("attitude_token"));
    if (item) {
      router.push("/account");
    }
  }, [item, router]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Il campo Username è richiesto"),
      password: Yup.string().required("Il campo Password è richiesto"),
    }),
    onSubmit: async (values, onSubmitProps) => {
      const res = await postLogin(JSON.stringify(values), values.username);

      dispatch(onOpen({ ...res }));

      localStorage.setItem("attitude_token", res.token);

      console.log(res.token, "bbbb");

      router.push("/account");

      onSubmitProps.resetForm();
    },
  });
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {auth.data.username && auth.data.email ? (
        <Alert mt="50px">Accesso già effettuato</Alert>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {formik.errors.username ? (
            <FormAlert message={formik.errors.username} />
          ) : (
            ""
          )}

          {formik.errors.password ? (
            <FormAlert message={formik.errors.password} />
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
            <label htmlFor="username">Username</label>
            <Input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            <label htmlFor="password">Password</label>
            <Input
              id="pass"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

            <Button type="submit">Accedi</Button>
          </form>
          <b>
            Non hai un Account?{" "}
            <Link href="/account/register">
              <a style={{ color: "goldenrod" }}>Registrati</a>
            </Link>
          </b>
        </div>
      )}
    </div>
  );
}

export default pageLogin;
