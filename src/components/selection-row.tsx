import { useState } from "react";
import CheckBox from "./check-box"

type SelectionRowProps = {
    name: string
    toggle: (value: boolean) => void
    isSelected: boolean
}

function SelectionRow({ name, toggle, isSelected }: SelectionRowProps) {
    const [justUnselected, setJustUnselected] = useState(false);
    return (
        <label className="svg-icon svg-icon-muted svg-icon-2hx" onMouseLeave={() => setJustUnselected(false)} >
            <div className="group flex justify-between items-center py-[8px] pl-[22px] pr-[15px] w-[370px] h-[42px]">
                <div>{name}</div>
                <CheckBox
                    toggle={toggle}
                    isSelected={isSelected}
                    justUnselected={justUnselected}
                    setJustUnselected={setJustUnselected}
                />
            </div>
        </label>
    )
}

export default SelectionRow
