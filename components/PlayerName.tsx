export const PlayerName = ({ name }: { name: string }) => (
  <textarea
    onChange={(event) => {
      console.log(event.target.value)
    }}
    onFocus={(event) => {
      event.target.select()
    }}
    defaultValue={name}
    className="mb-2 h-14 w-[75px] overflow-clip border-none bg-gray-900 p-0 text-center focus:[box-shadow:none] focus-visible:outline-none"
  />
)
