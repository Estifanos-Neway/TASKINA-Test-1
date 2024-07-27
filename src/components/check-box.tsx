import clsx from "clsx";

type CheckBoxProps = {
  toggle: (value: boolean) => void
  isSelected: boolean,
  justUnselected: boolean,
  setJustUnselected: (value: boolean) => void
}

function CheckBox({ toggle: toggleSelection, isSelected, justUnselected, setJustUnselected }: CheckBoxProps) {

  function processToggle(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.checked
    setJustUnselected(!value)
    toggleSelection(value)
  }

  let checkBoxClass = ""
  if (justUnselected) {
    checkBoxClass = ""
  } else if (isSelected) {
    checkBoxClass = "fill-[#2469F6] group-hover:fill-[#5087F8]"
  } else {
    checkBoxClass = "group-hover:fill-[#2469F6]"
  }

  return (
    <>
      <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg" onMouseLeave={() => setJustUnselected(false)} >
        <path d="M24 14L20.2286 17.7714L16.4571 21.5429L12 17.4286" stroke="white" stroke-width="1.5" stroke-linecap="round" />
        <g clip-path="url(#clip0_1_158)">
          <rect x="6" y="7" width="23" height="23" rx="6" fill="white" />
          <rect opacity="0.6" x="6.5" y="7.5" width="22" height="22" rx="5.5" stroke="#CDCDCD" />
        </g>
        <defs>
          <clipPath id="clip0_1_158">
            <rect x="6" y="7" width="23" height="23" rx="6" fill="red" />
          </clipPath>
        </defs>
        <rect x="6" y="7" width="23" height="23" rx="6" className={checkBoxClass} />
        <path d="M9.68 18.592L15.2288 23.5272C15.2493 23.5454 15.2805 23.5437 15.299 23.5235L25.32 12.52" className={clsx("stroke-[#D9DBE9]", (justUnselected || isSelected) ? "block" : "hidden group-hover:block")} stroke-linecap="round" />
      </svg>
      <input type="checkbox" checked={isSelected} onChange={processToggle} className="hidden" />
    </>
  );
}

export default CheckBox;
