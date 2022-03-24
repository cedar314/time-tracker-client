import React from 'react'
import { Formik, Form, Field } from 'formik'

export default function FolderSetting() {
  function submit() {
    return
  }

  function cancel() {
    return
  }

  return (
    <div>
      <Formik
        initialValues={{ name: '', description: '' }}
        onSubmit={() => console.log('submitted')}
      >
        <Form>
          <h1>New / Edit Task</h1>
          <Field name="name" />
          <Field name="description" />
          <button onClick={submit}>Create/Update Task</button>
          <button onClick={cancel}>Cancel</button>
        </Form>
      </Formik>
    </div>
  )
}
