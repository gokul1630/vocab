import { createSlice } from '@reduxjs/toolkit'

const vocabSlice = createSlice({
	name: 'vocab',
	initialState: {
		vocabs: [],
		showModal: false,
		showSecondModal: false,
		modalData: [],
		inputData: '',
		progress: false,
		filterData: [],
	},
	reducers: {
		setVocabs: (state, action) => {
			state.vocabs = action.payload
		},
		setShowModal: (state, action) => {
			state.showModal = action.payload
		},
		setModalData: (state, action) => {
			state.modalData = action.payload
		},
		setSecondModal: (state, action) => {
			state.showSecondModal = action.payload
		},
		setInputData: (state, action) => {
			state.inputData = action.payload
		},
		setProgress: (state, action) => {
			state.progress = action.payload
		},
		setFilterData: (state, action) => {
			state.filterData = action.payload
		},
	},
})
export const {
	setVocabs,
	setShowModal,
	setModalData,
	setSecondModal,
	setInputData,
	setProgress,
	setFilterData,
} = vocabSlice.actions

export const stateSelector = (state) => state

export default vocabSlice.reducer
