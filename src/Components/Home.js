import InputBase from '@material-ui/core/InputBase'
import { alpha, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import Fuse from 'fuse.js'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setFilterData,
  setModalData,
  setShowModal,
  setVocabs,
  stateSelector,
} from '../redux/slicers'
import client from '../utils/client'
import { GET } from '../utils/constants'
import FabButton from './FabButton'
import PopUpModal from './PopUpModal'
const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '50%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '50%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))
const Home = () => {
  const classes = useStyles()
  const state = useSelector(stateSelector)
  const dispatch = useDispatch()
  const modal = !state.showSecondModal

  const fuse = new Fuse(state.vocabs, {
    keys: ['vocabName'],
  })

  const filterList = (value) => {
    let result = fuse.search(value)
    dispatch(
      setFilterData(value ? result.map((item) => item.item) : state.vocabs)
    )
    console.log()
  }

  useEffect(() => {
    async function fetchData() {
      const response = await client('/vocab', { method: GET })
      let data = []
      response.forEach((item) => {
        data = [
          ...data,
          {
            vocabName: item.vocabName,
            vocabData: JSON.parse(item.vocabData),
          },
        ]
      })

      dispatch(setVocabs(data))
      dispatch(setFilterData(data))
    }
    fetchData()
  }, [dispatch, modal])

  return (
    <div className='cont'>
      <PopUpModal />
      <div className='topBar'>
        <h5>Vocab</h5>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            onChange={(event) => filterList(event.target.value)}
            placeholder='Search…'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </div>
      <div className='card-content' variant='outlined'>
        <div className='box'>
          {state.filterData.map((item, idx) => {
            return (
              <>
                <div
                  key={idx}
                  className='card-list'
                  onClick={() => {
                    dispatch(setModalData(item.vocabData))
                    dispatch(setShowModal(true))
                  }}
                >
                  <h4>{item.vocabName}</h4>
                  <p>
                    (defenition){' '}
                    {
                      item.vocabData.results[0].lexicalEntries[0].entries[0]
                        .senses[0].definitions
                    }
                  </p>
                </div>
                <hr />
              </>
            )
          })}
        </div>
        <FabButton />
      </div>
    </div>
  )
}

export default Home
