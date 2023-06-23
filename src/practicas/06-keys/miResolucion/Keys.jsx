import React from "react";
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-solid-svg-icons' */
import productsApi from "../../../fakeApi/products.json";
import accountsApi from "../../../fakeApi/accounts.json";
import usersApi from "../../../fakeApi/users.json";
import styles from "./Keys.module.css";

export const Keys = () => {
  return (
    <>
      <h1>Práctica 6</h1>
      <h2>Productos</h2>
      <div className={styles.productos}>
        {productsApi.map((product) => (
          <div className="producto" key={product.id}>
            <h3>{product.nombre}</h3>
            <h4>{product.precio}</h4>
            <p>{product.descripcion}</p>
          </div>
        ))}
      </div>
      <h2>Perfiles</h2>
      <div className="cuentas">
        {accountsApi.map((account, id) => (
          <div className={styles.cuenta} key={id}>
            <h3>{account.userName}</h3>
            <a href={`https://twitter.com/${account.account}`} target="_BLANK">
              ir al twitter
            </a>
          </div>
        ))}
      </div>
      <h2>Usuarios</h2>
      <div className={styles.usuarios}>
        {usersApi.map((usuario, id) => (
          <div className="usuario" key={id}>
            <h3>{usuario.apodo}</h3>
            <div className={styles.mascotas}>
              <h3>Mascotas</h3>
            {usuario.mascotas.map((mascota) => (
              <div className="mascota">
                <p>Nombre: {mascota.nombre}</p>
                <p>Edad: {mascota.edad}</p>
                <p>Color: {mascota.color}</p>
              </div>
            ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
