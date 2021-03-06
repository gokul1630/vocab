import React from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setModalData, setShowModal, stateSelector } from '../redux/slicers'

function PopUpModal() {
  const dispatch = useDispatch()
  const state = useSelector(stateSelector)
  return (
    <Modal
      show={state.showModal}
      centered
      size='md'
      onHide={() => {
        dispatch(setShowModal(false))
        dispatch(setModalData([]))
      }}
    >
      <Modal.Header closeButton>
        <h1>{state.modalData.id}</h1>
      </Modal.Header>
      {state.modalData.length !== 0 && (
        <Modal.Body className='modal-body'>
          <p>noun</p>
          <p>
            {
              state.modalData.results[0].lexicalEntries[0].entries[0]
                .etymologies
            }
          </p>

          {state.modalData.results[0].lexicalEntries.map((item) =>
            item.entries.map((item) =>
              item.senses.map((item) =>
                item.examples.map((item) => <li>{item.text}</li>)
              )
            )
          )}
        </Modal.Body>
      )}
    </Modal>
  )
}

export default PopUpModal
