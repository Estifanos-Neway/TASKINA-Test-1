import { useState } from "react"
import SelectionRow from "./components/selection-row"
import HorizontalDivider from "./components/divider"
import Button from "./components/button"

const initData = [
  { name: "Page 1", isSelected: false },
  { name: "Page 2", isSelected: false },
  { name: "Page 3", isSelected: false },
  { name: "Page 4", isSelected: false },
]

type Selection = {
  name: string
  isSelected: boolean
}

function App() {
  const [selections, setSelections] = useState<Selection[]>(initData)
  const [selectedAll, setSelectedAll] = useState(false)

  function selectOne(value: boolean, index: number) {
    const newSelections = [...selections]
    newSelections[index].isSelected = value
    if (newSelections.every(selection => selection.isSelected)) {
      setSelectedAll(true)
    } else {
      setSelectedAll(false)
    }
    setSelections(newSelections)
  }

  function selectAll(value: boolean) {
    setSelectedAll(value)
    setSelections(selections.map(selection => ({ ...selection, isSelected: value })))
  }

  function selectNone() {
    setSelectedAll(false)
    setSelections(selections.map(selection => ({ ...selection, isSelected: false })))
  }

  return (
    <main className='flex justify-center items-center bg-black h-screen text-text font-montserrat font-normal text-[14px] [line-height:18.2px]'>
      <div className="flex justify-center items-start w-[578px] bg-white h-[794px] max-h-[80%]">
        <div className="rounded-[6px] border border-border w-[Hug(370px)] h-[Hug(326px)] py-[10px] shadow-custom-box mt-[85px]">

          {/* ---------------------All Pages-------------------------------- */}
          <SelectionRow
            name="All pages"
            isSelected={selectedAll}
            toggle={selectAll}
          />

          <div className="px-[15px] py-[10px] w-[370px] h-[Hug(20px)]">
            <HorizontalDivider />
          </div>

          {/* ---------------------Each Pages-------------------------------- */}
          {selections.map((selection, index) => (
            <SelectionRow
              key={index}
              name={selection.name}
              toggle={(value: boolean) => selectOne(value, index)}
              isSelected={selection.isSelected} />
          ))}

          <div className="px-[15px] py-[10px] w-[370px] h-[Hug(20px)]">
            <HorizontalDivider />
          </div>

          {/* ---------------------Done Button-------------------------------- */}
          <div className="px-[15px] py-[10px] w-[370px] h-[Hug(60px)]">
            <Button text="Done" onClick={selectNone} />
          </div>

        </div>
      </div>
    </main>
  )
}

export default App
