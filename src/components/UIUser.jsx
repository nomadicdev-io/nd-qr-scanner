export default function UIUser({data}) {
  return (
    <div>
        <h1>{data.firstName}</h1>
        <p>{data.email}</p>
        <img src={data.image} width="100" height="100" />
    </div>
  )
}
