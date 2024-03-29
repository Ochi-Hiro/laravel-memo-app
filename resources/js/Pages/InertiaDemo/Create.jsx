import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from 'react'
import { router, usePage } from '@inertiajs/react'

export default function Edit({auth}) {

  const { errors } = usePage().props

  const [values, setValues] = useState({
    title: "",
    content: ""
  })

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
        ...values,
        [key]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    router.post('/inertia', values)
  }

  return (
    <>
      <AuthenticatedLayout
        user={auth.user}
      >
        <div className='text-2xl text-gray-900 m-auto mt-12 text-center'>InertiaTest CreatePage</div>
        <form onSubmit={ handleSubmit }>
          <label htmlFor="title" className="border-gray-300 ml-3">title:</label>
          <input 
            id="title"
            name='title'
            type="text"
            value={ values.title }
            onChange={ handleChange }
            className="border-gray-300 m-3"
          />
          {errors.title && <div className="text-rose-500 ml-3">{errors.title}</div>}
          <br/>
          <label htmlFor="content" className="border-gray-300 ml-3">content:</label>
          <input 
            id="content"
            name='content'
            type="text"
            value={ values.content }
            onChange={ handleChange }
            className="border-gray-300 m-3"
          />
          {errors.content && <div className="text-rose-500 ml-3">{errors.content}</div>}
          <br />
          <button 
            type="submit"
            className="p-2 m-3 bg-gray-800 border border-transparent rounded-md font-semibold text-white"
          >
            Submit
          </button>
      </form>
    </AuthenticatedLayout>
    </>
  )
}