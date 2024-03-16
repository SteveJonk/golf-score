export const PlayerName = ({ name }: { name: string }) => (
  <textarea
    onChange={(event) => {
      console.log(event.target.value)
    }}
    defaultValue={name}
    className="mb-2 h-14 w-[65px] overflow-clip border-none bg-gray-900 p-0 text-center focus-visible:outline-none"
  />
)
