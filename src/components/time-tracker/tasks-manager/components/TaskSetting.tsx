import React from 'react'
import { Formik, Form, Field } from 'formik'

export default function TaskSetting(props: { isNew: boolean }) {
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
        <Form className="mx-4">
          <h1>New / Edit Task</h1>
          <Field className="rounded" name="name" />
          <Field name="description" />
          <button onClick={submit}>Create/Update Task</button>
          <button onClick={cancel}>Cancel</button>
        </Form>
      </Formik>
    </div>
  )
}
