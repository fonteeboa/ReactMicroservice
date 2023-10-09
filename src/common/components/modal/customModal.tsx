import Modal from 'react-modal';
import React, { useEffect } from "react";
import { FormInstance } from "antd/lib/form";
import { useTranslation } from 'react-i18next';
import { Form, DatePicker } from "antd";
import { XOutline } from "heroicons-react";
import { ToastContainer } from 'react-toastify';
import moment from 'moment';
import { validFields } from '../../helpers/utils';
import { SelectComponent, InputField, Button } from '../base-components';

import { Field, ModalProps, FormData } from '../../types/modalType';

/**
 * Renders a custom modal component.
 *
 * @param {ModalProps} closeModal - Function to close the modal.
 * @param {Function} onSave - Function to save the form data.
 * @param {Array<Field>} fields - Array of form fields to render.
 * @param {string} contentLabel - Label for the modal content.
 * @param {any} currentItem - Current item data.
 * @return {ReactElement} The custom modal component.
 */
export const CustomModal: React.FC<ModalProps> = ({ closeModal, onSave, fields, contentLabel, currentItem }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm<FormInstance<FormData>>();
  const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width:'620px',
        height:'auto',
    },
  };

 
  useEffect(() => {
    /**
     * Updates the values of the current item in the form.
     * If the current item is an object, it iterates through each key and sets the corresponding form field value.
     *
     * @returns {void}
     */
    const setCurrentItemValues = () => {
      if (typeof currentItem === 'object') {
        Object.keys(currentItem).forEach((key) => {
          form.setFieldsValue({ [key]: validFields(currentItem[key], key) });
        })
      }
    }

    setCurrentItemValues();
  }, [currentItem, form]);

  /**
   * Handles the submit event for the form.
   *
   * @param {any} e - the submit event
   */
  const handleSubmit = async (e: any) => {
    try {
      const values: FormInstance<FormData> = await form.validateFields();
      onSave(values);
    } catch (error) {
      console.error("Erro ao validar campos do formulário:", error);
    }
  };

  /**
   * Sets the values of a field based on the event and field name.
   *
   * @param {any} e - the event object
   * @param {string} fieldName - the name of the field
   */
  const setFieldValues = (e: any, fieldName: string) => {
    let value = fieldName === 'date' ? moment(e).format("YYYY-MM-DD HH:mm") : e.target.value;
    if (value !== undefined) {
      form.setFieldsValue({ [fieldName]: value });
    }
  };

/**
 * Renders the fields for a given field object.
 *
 * @param {Field} field - The field object to render.
 * @return {JSX.Element} The rendered form item.
 */
  const renderfields = (field: Field) => {
    return (
        <Form.Item name={field.name} key={field.name}>
          {identifyField(field)}
        </Form.Item>
    )
  }

  /**
   * Closes the modal.
   *
   * @param {type} form - the form to be closed
   * @return {type} undefined
   */
  const handleCloseModal = () => {
    closeModal(form);
  }

  /**
   * Generates the JSX component based on the field type.
   *
   * @param {Field} field - The field object containing information about the field.
   * @return {JSX.Element} The generated JSX component.
   */
  const identifyField = (field: Field) => {
    switch(field.type){
      case 'select':
        return (
          <SelectComponent
            data-testid={"dataTestId" + field.name}
            name={field.name}
            label={field.label}
              onChange={(date) => setFieldValues(date, field.name)} // <- Passar o nome do campo aqui
          >
            {field.optionsFunction ? field.optionsFunction() : false}
          </SelectComponent>
        )
      case 'date':
        return (
          <div>
            <label className="block capitalize tracking-wide text-gray-700 text-xs font-normal mb-2" htmlFor={field.name}><span>{field.label}</span></label>
            <DatePicker
              className='block capitalize tracking-wide text-gray-700 text-xs font-normal mb-2'
              name={field.name}
              onChange={(date) => setFieldValues(date, field.name)} // <- Passar o nome do campo aqui
              data-testid={'dataTestId-' + field.name}
              value={validFields(( form.getFieldValue(field.name) || moment() ), field.name)}
            />
          </div>
        )
      default:
        return (
            <InputField
            type={field.type ? field.type : 'text'}
            name={field.name}
            label={field.label}
            data-testid={"dataTestId" + field.name}
            placeholder={field.placeholder ? field.placeholder : ''}
            onChange={(date) => setFieldValues(date, field.name)} // <- Passar o nome do campo aqui
          />
        )
    }
  }

  return (
    <Modal
      closeTimeoutMS={200}
      isOpen={true}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel={contentLabel}
    >
      <div className="flex justify-between items-start rounded-t dark:border-gray-600">
          <span className="text-sm font-semibold text-gray-900 dark:text-grey-900 text-sm font-light">{contentLabel}</span>
          <button type="button" onClick={closeModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
              <i><XOutline/></i>  
          </button>
      </div>
      <Form form={form} onFinish={handleSubmit}>
        <div className="py-2 px-4 border dark:border-gray-300">
          {fields.map((field) => renderfields(field))}
        </div>
        <div className="modal-buttons flex w-[100%] h-[60px] justify-end bg-[#F9F9F9] items-center border-x border-b dark:border-gray-300">
          <div className="flex items-baseline justify-center p-2">
              <Button 
                label={t('buttons.close')} 
                type="default" 
                color="alternative" 
                onClick={handleCloseModal}
                size="large"
                key="btn-close"
              />
          </div>
          <div className="flex items-baseline justify-center pr-4">            
              <Button 
                label={t('buttons.save')} 
                type="default" 
                color="primary" 
                data-testid="btn-save"
                size="large"
                key="btn-save"
              />
          </div>
        </div>
      </Form>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />      
    </Modal>
  );
};