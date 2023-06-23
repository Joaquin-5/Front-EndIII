
export const Card = (props) => {
  return (
    <>
        <h1>{props.title}</h1>

        {props.children}

        <footer>{props.footer}</footer>
    </>
  )
}
