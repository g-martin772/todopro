export default function UserIdPage({params}: {params: {id: string}}) {
  return (
    <div className={"text-sky-500"}>
      Hello, user {params.id}!
    </div>
  )
}