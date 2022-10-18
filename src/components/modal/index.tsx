import clsx from "clsx";
import { FunctionComponent, PropsWithChildren, useEffect, useState } from "react";

type ModalProps = {
  title?: React.ReactNode
  visible: boolean
  className?: string
  onClose?: () => void
  showClose?: boolean
  overlayClassName?: string
  width?: number | string
  border?: boolean
  footer?: null | React.ReactNode
  content?: React.ReactNode
}

const Modal: FunctionComponent<PropsWithChildren<ModalProps>> = (props) => {
  const { className, visible, title, showClose = true, overlayClassName, content, width = 600, border = true, footer } = props
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    setShowModal(visible)
  }, [visible])


  const hideModal = () => {
    setShowModal(false)
    props.onClose && props.onClose()
  }

  const handleClickOverlay = () => {
    setShowModal(false)
    props.onClose && props.onClose()
  }

  const renderNode = () => {
    return (
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto" style={{ width }}>
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className={clsx("flex items-start justify-between p-5  border-solid border-blueGray-200 rounded-t", border && "border-b")}>
                {title && <div className="text-2xl font-semibold">{title}</div>}
                {showClose && <button
                  className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={hideModal}
                >
                  <span className="text-primary h-6 w-6 text-2xl block outline-none focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </span>
                </button>}
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                {content || props.children}
              </div>
              {/*footer*/}
              {footer === null ? null : <div className={clsx("flex items-center justify-end p-6 border-solid border-blueGray-200 rounded-b", border && "border-t ")}>
                {footer}
              </div>}
            </div>
          </div>
        </div>
        <div className={clsx("opacity-25 fixed inset-0 z-40 bg-black", overlayClassName)} onClick={handleClickOverlay}></div>
      </>
    )
  }
  return showModal ? renderNode() : null
}

export default Modal
