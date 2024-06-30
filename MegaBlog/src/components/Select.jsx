import React, { useId } from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
}, ref) {

    const id = useId();

    return (
        <div className='w-full'>
            {
                label && <label htmlFor={id} className='inline-block mb-1 pl-1'></label>}
            {
                <select
                    {...props}
                    id={id}
                    ref={ref}
                    className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border-gray-200 w-full ${className}`}
                >
                    {
                        options?.map((option) => ( // ? is used to check if options is not null
                            <option key={option} value={option}>{option}</option>
                        ))
                    }

                </select>
            }
        </div>
    )
}

export default React.forwardRef(Select)  // forwardRef is used to forward the ref to the inner element if we forgot to use forwardref in above then we can use it here.
