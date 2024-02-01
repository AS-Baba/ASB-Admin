
const getFormValues = (form) => {
  const formData = new FormData(form);
  const values = [...formData.values()]
  const isEmpty = values.includes('')
  const data = Object.fromEntries(formData)
  console.log(data)
  return {isEmpty, data}
}

export default getFormValues