import users from "../../../fakeApi/users.json";

export const Datos = () => {
  // Ejercicio 1
  // Email del primer usuario
  console.log(users[0].email);

  // Apodo del tercer usuario
  console.log(users[2].apodo);

  // Color de la segunda mascota del tercer usuario
  console.log(users[2].mascotas[1].color);

  // Ejercicio 2
  // Destructoring primer y cuiarto elemento
  const [first, , , four] = users;
  console.log(first);
  console.log(four);

  // Extrae en variables
  const { email, mascotas } = first;
  console.log(email);
  console.log(mascotas);

  // Ejercicio 3
  const mascotasAgregadas = [
    ...mascotas,
    { nombre: "Nami", edad: 2, color: "negro" },
  ];

  console.log(mascotasAgregadas);

  // Ejercicio 4
  const cantidadMascotas = (user) =>
    `El usuario ${user.apodo} tiene ${user.mascotas.length} mascotas`;

  console.log(cantidadMascotas(users[0]));

  // Ejercicio 5
  const usuariosMuchasMascotas = (users) => {
    const masDeUnaMascota = users.filter((user) => user.mascotas.length > 1);
    return masDeUnaMascota;
  };

  console.log(usuariosMuchasMascotas(users));

  const cantidadDeMascotasPorUsuario = (arrayUsersMascotas) => {
    const cantidadDeMascotasPorUsuario = arrayUsersMascotas.map(
      (user) =>
        `El Usuario ${user.apodo} tiene ${user.mascotas.length} mascotas`
    );
    return cantidadDeMascotasPorUsuario;
  };

  console.log(cantidadDeMascotasPorUsuario(users));

  const cantidadTotalDeMascotas = (arrayUsers) => {
    let totalMascotas = arrayUsers.reduce((accumulator, user) => {
      return accumulator + user.mascotas.length;
    }, 0);

    return totalMascotas;
  };

  console.log(
    `La cantidad de mascotas totales son: ${cantidadTotalDeMascotas(users)}`
  );

  return <div>Desde datos</div>;
};
