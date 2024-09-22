import React,{useId} from 'react';


const Select = React.forwardRef(function select({
    label,
    options,
    className='',
    ...props
},ref){
    const id = useId();
    return (
        <div>
            {label && <label className="inline-block mb-1 pl-1"
            htmlFor={id}
            >{label}</label>}
            <select className={`px-3 py-2 rounded-lg outline-none text-black bg-white focus:bg-gray-50 duration-200 border border-gray-200 w-full${className}`}
            id={id}
            {...props}
            ref={ref}
            >
                {options?.map((option)=>(
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))} 
            </select>          
        </div>
    );
})

export default Select;
