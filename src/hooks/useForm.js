import { useState } from 'react';

export function useForm(initialState) {
   const [formData, setFormData] = useState(initialState);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((formData) => ({ ...formData, [name]: value }));
   };

   // custom hooks will often but not always return an object
   return {
      formData,
      setFormData,
      handleChange,
   };
}