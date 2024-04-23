import Select from 'react-select';

type SelectProps = {
    options: { label: string; value: string }[];
    width?: string;
};

function Selector({options = [{ label: "string", value: "string" }], width = "300px"}: SelectProps) {
    const customStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: '#e0f2fe',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            height: `60px`,
            textAlign: 'center',
        }),
        option: (styles: any, {isFocused, isSelected}: any) => {
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
            className={`w-[${width}] text-lg capitalize md:text-2xl`}
            closeMenuOnSelect={true}
            options={options}
            styles={customStyles}
        />
    );
}

export default Selector;
