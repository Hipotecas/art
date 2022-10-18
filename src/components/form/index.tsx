import CodeButton from "@/components/buttons/CodeButton";
import { Field, Form, Formik, FormikHelpers, useField } from "formik";

interface Values {
  mobile: string;
  code: string;
}

interface MyTextFieldProps extends React.DetailedHTMLProps<any, any> {
  label?: string
  className?: string
}


const validateMobile = (values: string) => {
  let errors
  if (!values) {
    errors = "请输入手机号"
  } else if (!/^1\d{10}/.test(values)) {
    errors = "请输入正确的手机号"
  }
  return errors
}
const validateCode = (values: string) => {
  let errors
  if (!values) {
    errors = "请输入验证码"
  }
  return errors
}
const RegisterForm = () => {


  return (
    <Formik
      initialValues={{
        mobile: '',
        code: ''
      }}
      onSubmit={(
        values: Values,
        { setSubmitting }: FormikHelpers<Values>
      ) => {
        console.log(values)
      }}
    >
      {
        ({ errors, touched, isValidating }) => {
          return <Form>
            <label htmlFor="mobile"></label>
            <Field id="mobile" maxLength="11" className="input input-bordered w-full" name="mobile" type="text" validate={validateMobile} placeholder="请输入手机号码" />
            <div className="flex w-full justify-between py-4">
              <div className="w-8/12">
                <label htmlFor="code"></label>
                <Field className="w-full input input-bordered" validate={validateCode} type="text" name="code" placeholder="请输入验证码" />
              </div>
              <CodeButton className="w-/3/12" />
            </div>
            <div className="pb-4 text-error">
              {touched.mobile && errors.mobile || touched.code && errors.code}
            </div>
            <button className="btn btn-primary w-full" type="submit">提交</button>
          </Form>
        }
      }
    </Formik>
  )
}

export default RegisterForm
