import Select from 'react-select';

type SelectProps = {
  options: { label: string; value: string }[];
};

function Selector({ options }: SelectProps) {
  const customStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: '#e0f2fe',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      height: '70px',
      textAlign: 'center',

    }),
    option: (styles: any, { isFocused, isSelected }: any) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? '#16a34a'
          : isFocused
            ? '#f3f4f6'
            : 'white',
        color: isSelected ? 'white' : 'black',
      };
    },
  };
  return (
    <Select
      placeholder="Select..."
      autoFocus={true}
      className="w-[300px] md:w-[300px] lg:w-[400px] text-2xl p-2 capitalize"
      closeMenuOnSelect={true}
      options={options}
      styles={customStyles}
    />
  );
}

export default Selector;
