export const PlayerName = ({
  name,
  onChangeName,
}: {
  name: string
  onChangeName: (newName: string) => void
}) => (
  <textarea
    onChange={(event) => onChangeName(event.target.value)}
    onFocus={(event) => event.target.select()}
    value={name}
    className="mb-2 h-14 w-[75px] overflow-clip border-none bg-white p-0 text-center focus:[box-shadow:none] focus-visible:outline-none dark:bg-gray-900"
  />
)
