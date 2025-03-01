import { useState } from "react";

type FormValues = { [key: string]: string | number | File | null };
type FormValuesWithoutFile = { [key: string]: string | number | boolean | null };

type ChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

// Hook with File Upload Option
export function useFormDataWithFile<T extends FormValues>(initialValue: T) {
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (e: ChangeEvent) :void=> {
    const target = e.target;
    const { name, type, value, files, checked } = target as HTMLInputElement;

    const newValue =
      type === "file" ? files?.[0] || null
      : type === "checkbox" ? checked
      : value;

    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const resetForm = ():void => setFormData(initialValue);

  const getFormData = ():FormData => {
    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value instanceof File ? value : String(value));
    });
    return formDataObj;
  };

  return { formData, handleChange, resetForm, getFormData };
}





// Hook without File Upload
export function useForm<T extends FormValuesWithoutFile>(initialValue: T) {
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (e: ChangeEvent) :void=> {
    const target = e.target;
    const { name, type, value, checked } = target as HTMLInputElement;

    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };


  const resetForm = ():void => setFormData(initialValue);

  return { formData, handleChange, resetForm };
}
