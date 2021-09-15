import { Button, Fab } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import AddIcon from '@material-ui/icons/Add'
import React from 'react'
import { Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
	setInputData,
	setProgress,
	setSecondModal,
	stateSelector,
} from '../redux/slicers'
import client from '../utils/client'
import { GET } from '../utils/constants'
function FabButton(props) {
	const state = useSelector(stateSelector)
	const dispatch = useDispatch()
	const submit = async () => {
		try {
			const response = await client('/vocab/search', {
				method: GET,
				params: { query: state.inputData },
			})
			if (response) {
				dispatch(setSecondModal(false))
				dispatch(setProgress(false))
			}
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div className='fab'>
			<Modal
				show={state.showSecondModal}
				centered
				size='md'
				onHide={() => {
					dispatch(setSecondModal(false))
					dispatch(setProgress(false))
				}}>
				<Modal.Header closeButton>
					<h1>Add to Dictionary</h1>
				</Modal.Header>
				<Form.Group className='mb-2'>
					<Form.Control
						className='input-txt'
						type='text'
						placeholder='Enter New Word'
						onChange={(e) => dispatch(setInputData(e.target.value))}
					/>
				</Form.Group>
				<Modal.Footer>
					<Button onClick={() => dispatch(setSecondModal(false))}>
						Cancel
					</Button>
					{state.progress ? (
						<CircularProgress color='secondary' />
					) : (
						<Button
							onClick={() => {
								submit()
								dispatch(setProgress(true))
							}}>
							Add
						</Button>
					)}
				</Modal.Footer>
			</Modal>
			<Fab
				className={'fab-btn'}
				color='secondary'
				onClick={() => dispatch(setSecondModal(true))}>
				<AddIcon />
			</Fab>
		</div>
	)
}

export default FabButton
