import { Title } from "./Components/Title";

export const JsxMotivation = () => {
  const handlerLike = () => {
    console.log("Se ha likeado la película");
  };

  return (
    <>
      <h1>Gigantes de Acero</h1>
      <p>
        La pelicula narra la historia de Charlie Kenton, un boxeador fracasado
        que está fuera de época, pues ahora son enormes máquinas las que luchan
        y compiten en el ring, mientras que él se ha convertido en un promotor
        de poca monta que habita en un mundo que no termina de entender.
      </p>
      <p>
        Charlie ahora se dedica a construir robots que compiten en peleas
        callejeras ilegales. Su vida no parece tener mucho sentido hasta que se
        reencuentra con su hijo Max. Él le devolverá la ilusión de regresar al
        mundo de la competencia y convertirse de nuevo en aspirante al
        campeonato mundial. Pero tendrá que actualizarse porque ya nada es como
        antes, las reglas han cambiado y el juego sucio se impone en el
        escenario.
      </p>
      <button onClick={handlerLike}>Dar Like</button>
      <Title title="Géneros" />
      <Title title="Actores" />
    </>
  );
};
