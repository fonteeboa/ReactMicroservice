import React from 'react';
import { IBox } from '../../types/base-components/selectComponent';

/**
 * Renders a select component.
 *
 * @param {IBox} props - The properties for the select component.
 * @param {string} props.name - The name of the select component.
 * @param {string} props.value - The value of the select component.
 * @param {string} props.label - The label for the select component.
 * @param {function} props.onChange - The function to call when the select component value changes.
 * @param {function} props.register - The function to register the select component with a form library.
 * @param {ReactNode} props.children - The children of the select component.
 * @param {any} props.rest - Any additional properties to spread onto the select component.
 * @return {ReactNode} The rendered select component.
 */
export const SelectComponent: React.FC<IBox> = ({ name, value, label, onChange, register, children, ...rest }) => {
  return (
    <>
      <label className="block capitalize tracking-wide text-gray-700 text-xs font-normal mb-2" htmlFor={name}><span>{label}</span></label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        {...register && ({ ...register(name) })}
        {...rest}
        className="placeholder:normal placeholder:text-slate-400 bg-white w-full border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      >
        {children}selectComponent
      </select>
    </>

  );
}