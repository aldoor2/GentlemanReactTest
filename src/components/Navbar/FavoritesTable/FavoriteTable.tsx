import { Person } from '@/models'
import { removeFavorite } from '@/redux/states/favorites'
import { AppStore } from '@/redux/store'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export interface FavoritesTableInterface {}

const FavoritesTable: React.FC<FavoritesTableInterface> = () => {
  const pageSize = 5
  const dispatch = useDispatch()
  const stateFavorites = useSelector((state: AppStore) => state.favorites)

  const handleClick = (person: Person) => {
    dispatch(removeFavorite(person))
  }

  const columns: GridColDef[] = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <IconButton
            color="secondary" aria-label="favorites" component="label" onClick={() => handleClick(params.row)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'category',
      headerName: 'Categories',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: 'levelOfHappeness',
      headerName: 'Level of happeness',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ]

  return (
    <DataGrid
      rows={stateFavorites}
      columns={columns}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      getRowId={(row: any) => row.id}
    />
  )
}

export default FavoritesTable
