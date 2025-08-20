type TabSwitchProps = { activeType: string; setActiveType: (type: string) => void };

const tabData = [
  { type: "phrase-12", label: "12 word" },
  { type: "phrase-24", label: "24 word" },
  { type: "phrase-key", label: "Private key" },
];
export function TabSwitch({ activeType, setActiveType }: TabSwitchProps) {
  return (
    <div className="switch">
      {tabData.map((tab) => (
        <button
          key={tab.type}
          type="button"
          className={`switch__item ${activeType === tab.type ? "switch__item--active" : ""}`}
          onClick={() => setActiveType(tab.type)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}